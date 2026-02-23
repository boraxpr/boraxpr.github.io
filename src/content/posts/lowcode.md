---

title: Low code, The code is low until it is not.
published: 2023-09-22
tags: ["Opinion", "Development", "Legacy Migration", "Tech Debt"]
---

Low code is not as straightforward as it might appear. While it may initially seem like an easy, error-free solution for developers, the reality is quite different. Low code can indeed simplify your life, but only until your project's requirements dictate otherwise.

## The Front-End Challenge

Low code platforms allow you to create user interfaces without requiring in-depth knowledge of HTML, CSS, or JavaScript. You can simply drag and drop elements like inputs, forms, buttons, and tables. There are even helper actions to pull data onto the screen and generate tables automatically. These pre-made UI elements promise speed and efficiency, making you feel like you can deliver quickly—assuming your project aligns with the pre-made UI components.

In practice, such alignment with pre-made UIs is rare. Customers and designers often demand customizations that involve CSS adjustments. This is where low code becomes a daunting challenge. Pre-made UIs come with their own pre-existing CSS code, making it challenging to modify them. Finding the right CSS class to edit can be a struggle, and you might end up reinventing the wheel by resorting to vanilla CSS, without the convenience of libraries.

In high-code environments, you have access to reusable React components, which can be more efficient than the low code alternative.

## Being Locked in the Environment

While low code platforms may offer some libraries, they may fall short when you need a specific one. Integrating external libraries can be far from straightforward, with limited documentation and poor integration with the low code platform itself.

## The Risk of Reinventing the Wheel

When importing well-tested and proven libraries is impossible, and your project requirements exceed the capabilities of your low code platform, you're left with no choice but to write your own code. This can be time-consuming and prone to bugs, whereas high-code environments offer the convenience of utilizing existing libraries to save time and effort.

In summary, low code can simplify development, but it's essential to recognize its limitations. It's "low" until your project's unique demands push you into the complexities of custom CSS, limited library options, and potentially reinventing solutions.

>"In essence, low code serves as a higher-level abstraction of high code, but the closed nature of low code platforms frequently necessitates subpar high-code workarounds, ultimately compromising software quality." 
