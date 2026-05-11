---

title: 'Internal Apps: Simple in Theory, Back-Breakingly Expensive Expensive in Reality'
published: 2026-05-11
tags: ["Software Architecture", "Engineering Culture", "Tech Debt"]
---


## The "Ground Zero" Cycle

Why does software in Thailand often have such a short lifespan? Why are we constantly forced into a rework from ground zero?

The answer isn't a lack of technical skill; it’s a failure of culture. We often prioritize feelings over facts. The "opinion of the important person" consistently overrides engineering reality. Because no one is willing to act as the architectural pillar—the one who says "No" to protect the system's integrity—Ownership essentially vanishes.

This is exacerbated by a business landscape that still views Software Engineers as mere "Order-takers" rather than Strategic Partners. When you're just taking orders, you aren't building a system; you're just piling up requests until the whole thing topples over.

## YAGNI, KISS: The Bedrock of Sanity

- YAGNI: You Ain't Gonna Need It.

- KISS: Keep It Simple, Straightforward.

These are the fundamental laws of sustainable software. If a system becomes too complex, it becomes unusable. Period. A common delusion among stakeholders is that Simple UI = Simple System.

In reality, the invisible complexity—the data flows, the state management, the logic branching—is what actually dictates the cost. Business stakeholders rarely weigh in on this hidden complexity, and it inevitably comes back to bite them years later. By then, the logic is so convoluted that even the person who originally requested the feature can’t remember why it exists.

## The "Just-This-One" Exception Trap

Our work culture has a pathological obsession with the Exception.  
"Can we just skip this step for this one case?"  
"Can we add a special rule just for this department?"  

This isn't just reflected in the code; it’s baked into our processes and documentation. Why do we love exceptions? Fear. We are afraid of risk, so we add "safety nets" just in case. When you start with a sentimental factor (feeling safe) rather than facts (business needs), Scope Creep becomes the default setting. People feel "safer" having a button they’ll never use than not having it at all.

## Should New Grads Work on Internal Apps?

There’s a misconception that working on enterprise internal apps is "chill" compared to high-traffic consumer products. Personally, I think internal apps are far more terrifying.

Sure, the user count is low, but the exceptions per capita are astronomical.

Imagine a hollowed-out, empty truck. That’s your software at the start.
Every time you add an "exception," you’re throwing cargo into that truck.

- The more you add, the heavier it gets.

- The heavier it gets, the more fuel (money) it burns.

- The heavier it gets, the harder it is to drive.  

Suddenly, you’re behind the wheel, sweating, trying to remember: "Wait, what was the logic here again? How many days until the status changes? Oh, but wait—Senior Staff A requested a special field for this specific scenario, so we have to bypass the 1-2-3-4 flow..."

When the truck finally breaks down under the weight of "just this once," don't be surprised. You didn't build a system; you built a monument to everyone's anxieties.  

---
A Quick "Systems-Thinker" Note:
>>>If we want our software to survive past the two-year mark, we have to stop being order-takers. We have to start defending the architecture as if the "fuel cost" of the company depends on it—because it usually does.

---
P.S. This article is written in thai and converted to english by Gemini