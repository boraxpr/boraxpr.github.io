---
title: "TanStack is optional. Somehow it got sold as mandatory."
published: 2026-01-10
tags: ["React", "Frontend", "Opinion"]
---

TanStack is optional.

That’s the entire point that keeps getting lost.

Somewhere along the way, it stopped being presented as a tool with tradeoffs and started being sold as a *must use* for React developers.

Not as “use this when it fits.”  
Not as “here’s what it solves.”  
But as a baseline.

Once that narrative sets in, people stop thinking.

Newer developers assume it’s required.  
They reach for it by default.  
And when you ask *why*, the answers are vague.

“Better performance.”  
“Industry standard.”  
“Everyone uses it.”  
“It handles caching.”

None of those explain why *this app* needs it.

It starts to feel less like engineering and more like belief.

---

The truth is simpler.

TanStack solves a **specific class of problems**:
- shared server state
- read-heavy data
- background revalidation
- convenience around caching

That’s it.

It does not make data more correct.  
It does not eliminate race conditions.  
It does not replace thinking about async behavior.

It just gives you tools.

Useful ones.  
Optional ones.

---

The moment you introduce a client-side cache, you introduce time as a concern.

Multiple requests in flight.  
Out-of-order responses.  
Background refetch.  
Mutations racing reads.  
Optimistic updates guessing the future.

Now you’re not just fetching data.  
You’re reasoning about ordering, invalidation, and overwrite windows.

That complexity is real, even if the abstraction hides it.

---

What gets glossed over is that **most apps don’t need this**.

Fetching on demand works.

Component mounts, fetch.  
User acts, refetch.  
Server stays authoritative.

It’s slower.  
It shows loading states.  
And it’s correct.

I’d rather show a spinner than lie.

---

There *are* places where TanStack fits well:
- app configuration
- feature flags
- read-heavy, low-mutation reference data

Notice the pattern.

Global meaning.  
Rare writes.  
Tolerance for brief staleness.

That’s not most CRUD.

Auth isn’t one of them either.  
Auth should be validated by the server on every page or navigation. It’s security-critical and intolerant to staleness.

If calling an auth endpoint on every page is a problem, that’s a backend issue, not a reason to cache it on the client.

---

The problem isn’t TanStack.

The problem is how it’s talked about.

When a tool is oversold as mandatory, people stop evaluating it.  
They stop understanding it.  
They stop questioning whether it fits.

At that point, it’s no longer a tool.  
It’s doctrine.

---

So no, I don’t use TanStack by default.

Not because it’s bad.  
Not because it’s useless.

Because it’s optional.  
And treating optional tools as mandatory is how complexity sneaks in unnoticed.
