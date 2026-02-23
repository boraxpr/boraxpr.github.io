---
title: "Excel Is Not Machine-Readable Data (And OCR Won’t Save You)"
published: 2025-12-19
tags: ["Legacy Migration"]
---

## TL;DR

- OCR accuracy does not help if documents are full of process debt.
- Excel is a **human-readable UI**, not a data contract.
- CSV and JSON are transport formats, not places where meaning lives.
- Without a database that enforces schema and semantics, automation will not scale.
- AI does not reduce cost. It merely relocates it into glue and exception handling.

---

## OCR Accuracy Is Not the Bottleneck

OCR news shows up constantly.  
Higher accuracy. Lower cost. Better language support. Easier workflow integration.

But the real question is not  
**Can you read the document?**

The real question is  
**What can you do with the output next?**

Most enterprise documents were never designed to be machine-readable.

- Rows exist for reasons nobody remembers.
- Addresses are split across pages due to legacy system limits.
- The same field means different things in different departments.
- Codes like `01` or `AZ1202` require asking someone or opening another document.

OCR solves only one step:

`pixel → text`

Automation requires something very different:

`text → meaning → action`

And this is where most systems break down.

---

## The Real Enemy Is Tribal Knowledge

You can have 120 percent OCR accuracy.  
It still does not matter if meaning lives in people.

- “What does code 01 mean? Ask someone.”
- “This code needs to be looked up in another Excel file.”
- “These two fields are actually one value.”

At that point, human-in-the-loop is not optional.  
It is a hard requirement.

AI cannot fix this, because the problem is not intelligence.  
The problem is **undefined semantics**.

Guessing is non-deterministic.  
Non-deterministic systems cannot be audited.  
Unauditable systems do not survive production.

This is not technical debt.  
It is **organizational debt**.

---

## Excel Is Human-Readable First

Excel is readable by machines.  
But it was never designed to be machine-readable.

Excel is a UI for humans.

- merged cells
- color-coded meaning
- floating headers
- notes mixed with data
- formulas that depend on context

Machines can parse Excel files.  
Machines cannot reliably infer meaning from them.

Excel works well when humans are part of the loop.  
It fails as the foundation of automation.

---

## CSV and JSON Are Not Storage

A common misconception is that converting Excel to CSV or JSON makes data machine-readable.

It does not.

CSV and JSON are **transport formats**.  
They are not sources of truth.

No serious system stores long-term meaning in CSV or JSON files.

What you actually need is a **database**.

A database enforces things files never will:

- schema
- constraints
- referential integrity
- versioned structure
- deterministic queries
- auditability

Without these guarantees, you are not storing data.  
You are storing ambiguity.

---

## Cost Did Not Disappear. It Moved.

Before OCR and AI:

- people type
- people check

After OCR and AI:

- people interpret intent
- people maintain mappings
- people fix exceptions
- people maintain the bridge between OCR, AI, and the database

The cost does not go away.  
It gets redistributed, often into more expensive roles.

Over time, that bridge layer becomes the next generation of process debt.  
“Do not touch it. It will break.”

---

## Excel as a Source of Truth Is Just Vibe Coding for Data

Using Excel as a source of machine truth is equivalent to letting a vibe coder do a database engineer’s job.

A database engineer’s responsibility is to make meaning explicit and enforced.  
Schema, constraints, references, invariants, migrations, ownership.  
The system is allowed to say no.

Excel does the opposite.

Excel is permissive by design.  
Anything goes. Any shape. Any workaround.  
Validation is optional. Semantics are implicit. Errors are silent.

That is exactly how vibe-coded systems behave.

- Rules live in someone’s head.
- Structure emerges accidentally.
- Edge cases are handled “later.”
- Everything works until scale or automation shows up.

When Excel becomes the source of truth, the failure modes are the same:

- Schema drift with no visibility.
- Business rules encoded in layouts, colors, or side documents.
- Integrity enforced socially instead of technically.
- Automation that breaks the moment a new person touches the file.

It feels productive at first.  
You move fast. Nothing blocks you.

Until auditability, reliability, or automation becomes a requirement.  
Then everything collapses at once.

The core problem is simple:  
you replaced enforced contracts with vibes.

---

## If You Want Automation, Redesign First

If an organization is serious about automation, the hard work comes first:

- eliminate tribal knowledge
- define a canonical schema
- create a single source of truth
- enforce validation
- reject ambiguous input

This is process redesign, not tooling.

Deploying AI before doing this is cosmetic engineering.

---

## Conclusion

OCR is not failing.  
AI is not failing.

Organizations fail when they refuse to formalize their own knowledge  
and expect intelligence to emerge from ambiguity.

As long as meaning lives in people instead of systems,  
people will always be pulled back into the loop.

No model, no matter how advanced, can change that.
