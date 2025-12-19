---

title: 'Stop Forcing React to Re-render: Here’s a Better Way'
published: 2024-06-20
---

React, the most popular JavaScript framework for building user interfaces, leverages state management to efficiently update and re-render components. In the early days of web development, developers relied on vanilla JavaScript or libraries like jQuery to perform partial page updates using AJAX. React simplifies this by automatically re-rendering components when the state changes.

## Re-rendering with setState

React detects changes and triggers re-renders when the state is updated using the setState method (or the useState hook in functional components). Here’s a simple example:

```jsx
const [example, setExample] = useState({ Apple: 1, Banana: 8, Orange: 4 })

// Re-render is triggered on set state
setExample({ Apple: 7, Banana: 8, Orange: 4 })
```

## The Problem with Direct State Mutation

A common anti-pattern in React is directly mutating the state and then setting it back. This approach does not trigger a re-render because React uses shallow comparison to detect state changes. If the reference to the state object does not change, React assumes the state has not changed.
🚫

```jsx
// Get the default value
let tmpExample = example
// Mutate the state
tmpExample[Apple] = 7
// Set it right back
setExample(tmpExample)
```

What happen is the screen will not be rerendered because the object id has not changed.

## Force Re-rendering as an Anti-pattern

To force a re-render, some developers introduce a boolean state variable. This approach can work but is considered an anti-pattern because it complicates the code and can lead to unexpected behaviors.
🚫

```jsx
const [rerender, setRerender] = useState(false)

// Get the default value
let tmpExample = example
// Mutate the state
tmpExample[Apple] = 7
// Set it right back
setExample(tmpExample)

// Trigger the rerender
setRerender(!rerender)
```

While this method triggers a re-render, it is not recommended. It adds unnecessary complexity and can be confusing to others maintaining the code.

## The Proper Way: Shallow Copy

A better solution is to create a shallow copy of the state object and update the copy. This ensures that the reference changes, triggering React’s re-render mechanism.

```jsx
const [example, setExample] = useState({ Apple: 1, Banana: 8, Orange: 4 })

// Re-render is triggered on set state
setExample({ Apple: 7, ...example })
```

In this example, the spread operator (...example) creates a shallow copy of the example object. The Apple property is updated, and the new object is passed to setExample, ensuring that React detects the change and re-renders the component.

## Conclusion

Using the spread operator to create a shallow copy of the state object is a best practice in React. It avoids the pitfalls of direct state mutation and force re-rendering, leading to more predictable and maintainable code. Remember, immutability is key to effectively managing state in React applications.
