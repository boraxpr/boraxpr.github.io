---

title: 'The “Just Use X” Fallacy'
published: 2025-12-18
tags: ["Opinion", "Engineering Culture", "Tech Debt"]
---

In modern engineering discussions, complex problems are often reduced to simple prescriptions.

> “Just use AI.”  
> “Just add cache.”  
> “Just switch the language.”  
> “Just change the framework.”

Different words. Same pattern.

This kind of thinking is not optimization.  
It is avoidance.

---

## Why “Just Use X” sounds convincing

“Just use X” feels efficient. It suggests decisiveness and competence without requiring a deep explanation. The listener is spared the discomfort of uncertainty, trade-offs, and messy constraints.

When such statements come from people with perceived authority, seniority, reputation, or even from AI systems that speak with confidence, they spread easily. The idea gains momentum not because it is correct, but because it feels complete.

---

## AI amplifies shallow reasoning

Large language models do not reason about problems in the way humans expect them to. They respond to the structure and assumptions embedded in a prompt.

If a question assumes that a problem is simple and solvable by a single tool, the answer will often reinforce that assumption. Not maliciously, but fluently.

The result is subtle but dangerous. Weak mental models are not challenged. They are refined, polished, and made more persuasive.

---

## Tools do not remove cost, they move it

There is no such thing as a free optimization.

Adding a tool does not eliminate cost.  
It relocates it.

- Caching shifts cost from IO to memory, CPU, serialization, and invalidation complexity.
- AI shifts cost from deterministic logic to probabilistic behavior, verification, and trust boundaries.
- Switching languages shifts cost from runtime to migration, tooling, and human expertise.
- Adding infrastructure shifts cost from simplicity to operations, failure modes, and long-term maintenance.

If you do not understand where the original cost lives, you will not notice where it moved. The system may look faster, smarter, or more modern, while becoming harder to reason about and easier to break.

---

## Understanding is not optional

Real problem-solving requires understanding constraints, trade-offs, and failure modes. It requires knowing who pays the cost and when that cost surfaces.

No tool can substitute for this. AI included.

If AI truly understood systems, it would consistently identify root causes without human intervention. What we have instead is something more reflective than intelligent. It mirrors the depth of the thinking we put into it.

---

## Closing thought

“Just use X” is rarely an answer.  
More often, it is a signal.

A signal that the problem has not been understood yet.