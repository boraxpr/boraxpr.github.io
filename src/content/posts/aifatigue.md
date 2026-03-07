---

title: 'AI Fatigue and peak of non-tech expectation'
published: 2026-03-07
tags: ["Engineering Culture","AI","Tech Debt"]
---


I think I’ve hit AI fatigue.

Not because I don’t use it. I use it every day. Constantly. It’s part of how I debug, design, and ship systems. I was following this space long before mass enterprise adoption, before every executive suddenly had an “AI strategy.”

What burns me out is the noise. The endless wave of headlines and demos with the same tired promise: *“AI will replace us in 6–12 months.”*

This narrative should’ve died already. If AI is going to replace me, then replace me. Don’t warn me. Don’t hype it. Don’t count down. If the replacement is real, just do it. Otherwise, stop the clock.

### The Gap Between Demo and Reality
Instead of replacement, we get an endless sequence of tools: Copilot, Claude Computer Use, Cursor, Claude Code, and an army of "agents." Each is framed as the moment humans become optional. 

And yet, I use them every day, and I find mistakes every single day. Not rare edge cases—daily, systemic errors:
* **Flawed Assumptions**: Logic that breaks the moment it hits a real-world constraint.
* **Hallucinated Syntax**: Code that looks elegant but relies on non-existent libraries.
* **Confidently Incorrect Logic**: Solutions that pass a superficial glance but fail under load.

### Wiring Probability into Determinism
The current push is to connect these systems directly to actions—letting them run commands, modify infrastructure, and operate production environments with the assumption that it will “just work.”



It won’t. At its core, an LLM is a **probabilistic system**. It predicts; it does not "know." It does not verify unless forced. It does not carry responsibility.

We spent decades engineering **deterministic systems** because predictability and reliability matter. Now, we’re wiring probabilistic engines into deterministic infrastructure and hoping for the best. 

**Hope is not an engineering strategy.**

### The Human Bottleneck: Judgment
AI is the most powerful force-multiplier I’ve ever used. It removes friction and lets one person do the work of many. But **acceleration is not replacement.**

The bottleneck in software engineering was never typing speed; it was **judgment**. It’s the ability to know something is wrong even when it looks correct. AI can generate at light speed, but it cannot care if it’s right.

So I’m done with the countdowns. If replacement arrives, it won’t be through a press release or a flashy demo. It will arrive quietly, when the results finally speak louder than the hype.

Until then, I’ll keep using it. And I’ll definitely keep checking its work.
