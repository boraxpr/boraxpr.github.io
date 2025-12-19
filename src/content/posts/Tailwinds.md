---

title: Art of Tailwind CSS
published: 2024-01-17
---

TailwindCSS is a utility-first CSS framework. It is a set of CSS classes that you can use to style your HTML elements. It is not a UI library like Bootstrap or Material UI. It is a CSS framework that you can use to build your own UI library. Assuming you have a basic understanding of HTML and CSS, you can use TailwindCSS to build your own UI library.

# Animate

One of the hardest thing to do is Animation
In tailwind.config.js, you can add your own animation.
Keyframes are the animation that you want to do. Animation is the name of the animation that you want to do.

```js
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      keyframes: {
        shake: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0)' },
          '10%, 30%, 50%, 70%, 90%': { transform: 'translate3d(-10px, 0, 0)' },
          '20%, 40%, 60%, 80%': { transform: 'translate3d(10px, 0, 0)' }
        }
      },
      animation: {
        shake: 'shake 1s ease-in-out'
      }
    }
  },
  plugins: []
}
```

After that, you can use the animation in your HTML element.

```html
<div className="animate-shake">Shake me!</div>
```

# Arbitrary Values

You can use arbitrary values in TailwindCSS. For example, if you want to set the width of an element to 100px, you can do it like this:

```html
<div className="w-[100px]">My Element</div>
```

You can also use arbitrary values in the `@apply` directive. For example, if you want to set the width of an element to 100px, you can do it like this:

```css
@layer base {
  .my-element {
    @apply w-[100px];
  }
}
```

Then you can use the `my-element` class like this:

```html
<div className="my-element">My Element</div>
```

You can't use it for animations though.

# Don't make components for default HTML elements

You do not need to make components for default HTML elements to reuse TailwindCSS classes. Things like button, input, p tag, etc. You can override them by using the `@apply` directive at @layer base.

@layer base on globals.css is the base layer. It is the default style of the HTML elements. You can override the default style by using the @layer base directive. For example, if you want to override the default style of the `h1` element, you can do it like this on your globals.css file:

```css
@layer base {
  h1 {
    @apply text-4xl font-bold text-gray-900;
  }
}
```

Then you can use the `h1` element like this:

```html
<h1>My Title</h1>
```

Even for the `button` element, you can override the default style like this:

```css
@layer base {
  button {
    @apply px-4 py-2 text-white bg-blue-500 rounded-md;
  }
}
```

Then you can use the `button` element like this:

```html
<button>My Button</button>
```

Then poof!, all your buttons will have the same style.

# Reuse : Do make components for custom elements

You can make components for custom elements. For example, if you want to make a card, you can do it like this:

```tsx
async function handleClick() {
  const { data, error } = await someAPICalls
  redirect('/some-page')
}
;<Card
  customTailwindClasses="bg-red-50 border-red-200 rounded-lg"
  customFunction={() => handleClick}
>
  <span>My Card</span>
  <span>Card detail</span>
</Card>
```

Then you can make a component for it like this:

```ts
// Card.tsx
import React from 'react'

export default function Card({
  children,
  customTailwindClasses,
  customFunction
}: {
  children: React.ReactNode
  customTailwindClasses?: string
  customFunction?: () => void
}) {
  return (
    <div className={`${customTailwindClasses}`} onClick={customFunction}>
      {children}
    </div>
  )
}
```
