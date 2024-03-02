---
type: post
title: 'Cookie-Token based Authentication (Client-To-Server)'
date: 2024-03-02
---

Authentication is one of the hardest thing to do. Even when almost every application that you need to implement nowadays (Client-To-Server), needs an authentication system.
Today, I'm going to debunk the myth of the authentication in both front and backend.

## The Problem : Front-end

Front-End should not be able to access the cookie. Confusing isn't it ? Exposing a cookie or any token on front-end is just pure WRONG with CAPS because it allows anyone with JavaScript steal your identity. How are we going to implement protected routes ? you might ask.

## The Key : Set-Cookie & HttpOnly

Invented back in 2002 by Microsoft Internet Explorer developers, HttpOnly is a flag that you could set inside "Set-Cookie" HTTP response header.
How is this important ? Because Set-Cookie header that you send from server-side is automatically captured by the client-side, and every subsequence requests to the server by the same origin will be attached with the cookie without any intervention from the client-side.
This way, You prevent all access from client-side and the only way hacker could do you wrong is to mess with the server. Cross-site scripting (XSS) would be the past problem. On top of that, set SameSite Attribute = Strict or Lax helps mitigate Cross-Site Request Forgery(CSRF) attacks.

## How-To

### The Front-End

Whether you are using Framework like Nuxt, Vue, Next or library like React to do a multi-page app, you are going to have a router.
That router, you can do a middleware. Every route changes you need to call the server-side to check session. If True, Allow access. If False, Redirect to Login Page. And that's it for the Front-End.

### The Back-End

Back-End is the main actor here. You need /login, /session and some knowledge about JWT.
JavaScript Object Notation Web Token. Ok, just ignore that. Basically, JWT is a base64 encoded text.

```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
```

### The JWT

Anyone can decode JWT, sees its content. But Only the one with its pro·gen·i·tor "SECRET" is able to edit, verify and create more JWT cute childlings. Hence, JWTs can provide data integrity, authenticity but lacks confidentiality.

Now, After you know about the JWT secret and their ability to create more childs.

### The Back-End & JWT interaction

**/login**: After successfully verify username and password, response with cookie (Don't forget to use Set-Cookie to make the browser automatically handles the cookie safely) and user info.
<br>
**/session** : Will check the cookie from the client (Automatically sent on every subsequences)

Here is more things you need to know. Cookie Expiration controls how long the cookie will be stored and sent by the browser. Once it has expired, the browser will not include it in requests to the server. JWT Expiration controls the validation on the server-side. The secret and the expiry of JWT will be cross checked on parsing and JWT childs that passed their expiry are invalid.

### The limitations

This method of cookie-token has one of its downside being when you need multiple domain to call the server apis. If that's the case then you would need "Token based Authentication" which is basically everything Cookie-Token Based Authentication is minus "Set-Cookie". Now you need to send the JWT token via header "Authorization: Bearer [Your token]" (This format is a socially accepted. But it's not enforced by the client because you will need to do it all manually for using Token-based Authentication.) and on the client-side you would need to manually unpack it and store it somewhere (LocalStorage, SessionStorage, Cookie, Application Memory, Web Worker). And then you would need to include the said token on every requests to the apis. And use backend auth middleware implementation to intercept and verify all requests. However, there will be nuances of security issues in this method that requires more effort such as utilizing encryption and hashing algorithms. That is also take a toll on the performance on each token retrieval.

## Conclusion

In conclusion, the keywords are JWT secrets (Secret can be used to verify, create more JWT child), Set-Cookie (Let your browser automate cookie management far out of JavaScript reach), Use the server and finally do not trust the client.<br>

<https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie>
<https://owasp.org/www-community/HttpOnly>
