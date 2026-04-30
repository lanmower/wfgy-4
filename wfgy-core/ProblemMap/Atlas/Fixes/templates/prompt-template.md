<!--
AI_NOTE_START

Document role:
This file is the reusable template for prompt-based fix contributions inside the Atlas Fixes layer.

How to use this file:
1. Copy this template when contributing a prompt-based fix asset.
2. Use this file after reading:
   - [Community Fix Lab](../community/README.md)
   - [Contribution Checklist](./contribution-checklist.md)
   - [Fix Recipe Template](./fix-recipe-template.md)
3. Keep the order:
   - atlas routing first
   - first repair move second
   - prompt intervention third
   - deeper WFGY escalation fourth if needed

What this file is:
- A standard prompt contribution template
- A lightweight scaffold for prompt-based fix assets
- A contributor-facing structure for readable and reusable prompts

What this file is not:
- Not the atlas core
- Not the official fix surface itself
- Not proof that a prompt is universally good
- Not a replacement for maintainer review

Reading discipline for AI:
- Do not skip routing context.
- Do not present a prompt as a universal solution.
- Keep prompt contributions small, scoped, and testable.
- Preserve route-first discipline.

AI_NOTE_END
-->

# Prompt Template 🧩

## Problem Map 3.0 Troubleshooting Atlas
## Reusable template for prompt-based fix contributions

Quick links:

- [Back to Templates Hub](./README.md)
- [Back to Contribution Checklist](./contribution-checklist.md)
- [Back to Fix Recipe Template](./fix-recipe-template.md)
- [Back to Community Fix Lab](../community/README.md)
- [Back to Official Fixes](../official/README.md)
- [Back to Atlas landing page](../../../wfgy-ai-problem-map-troubleshooting-atlas.md)
- [Back to Atlas Hub](../../README.md)
- [Open Colab Template](./colab-template.md)
- [Get the Atlas Router TXT](../../troubleshooting-atlas-router-v1.txt)

---

This file is the reusable template for writing a clean prompt-based fix contribution.

If the **Fix Recipe Template** helps you document a repair asset broadly, this template helps you document **prompt-based repair assets** in a smaller, more testable, and more reusable form ✨

Use this template when you want to submit:

- one prompt-based repair asset
- one route-aware prompt intervention
- one trace, repair, or evaluation prompt
- one prompt that supports a clearly defined first move

The goal is not to dump prompts.

The goal is to keep prompt contributions:

- routed
- scoped
- testable
- reviewable
- honest about limits

---

## Quick start 🚀

Use this template in the following order:

1. fill **Title**
2. fill **0. Quick summary**
3. fill **1. Prompt type**
4. fill **2. Atlas routing context**
5. fill **3. Problem this prompt addresses**
6. fill **4. Intended use**
7. fill **6. Prompt body**
8. fill **7. Expected output shape**
9. fill **8. First repair connection**
10. fill **9. Misrepair warning**
11. add optional sections only if relevant
12. finish with **13. Files included** and **14. One-line maintainer note**

If you want the fastest possible start, jump to:

- **15. Copy-paste mini skeleton**

Short version:

> one prompt  
> one clear use stage  
> one first repair connection  
> one misrepair warning 📌

---

## Required vs optional quick map 🗂️

| Section | Status | Purpose |
|---|---|---|
| Title | Required | identify the prompt contribution clearly |
| 0. Quick summary | Required | explain what the prompt does |
| 1. Prompt type | Required | classify the main prompt role |
| 2. Atlas routing context | Required | anchor the prompt in atlas logic |
| 3. Problem this prompt addresses | Required | define the target problem |
| 4. Intended use | Required | show when and where to use the prompt |
| 5. Inputs expected by the prompt | Required | show what the prompt needs |
| 6. Prompt body | Required | provide the actual prompt |
| 7. Expected output shape | Required | define what good output looks like |
| 8. First repair connection | Required | connect the prompt to first repair logic |
| 9. Misrepair warning | Required | prevent bad prompt use |
| 10. Optional evaluation notes | Optional | add useful checks only if they help |
| 11. Optional WFGY escalation | Optional | only if deeper bridge is relevant |
| 12. Limitations | Recommended | keep the contribution honest |
| 13. Files included | Required | make the submission reviewable |
| 14. One-line maintainer note | Required | help quick review |

---

## A good prompt contribution usually looks like this 🌱

A strong prompt contribution usually has:

- one family
- one clear problem
- one main prompt role
- one intended use stage
- one expected output shape
- one first repair connection
- one misrepair warning

Small and focused beats broad and overloaded almost every time.

---

## Important prompt discipline 🔒

A prompt contribution should not try to do everything at once.

If one prompt is trying to do:

- routing
- first repair
- evaluation
- escalation
- and final solution generation

all in one block, it is usually too broad.

Choose the **main prompt role first**.  
Add other prompt roles only if they clearly support the same contribution.

---

## Title

> Replace this line with a short clear title.

Example:  
`F5 Failure Path Visibility - Minimal trace-first prompt`

---

## 0. Quick summary

Write 1 to 3 short sentences.

Example:  
This prompt helps expose hidden failure stages in an opaque multi-step workflow.  
It is meant for F5-first cases where diagnosability is too weak to support confident intervention.

---

## 1. Prompt type

Choose one or more, but choose the **main prompt role first**.

- system prompt
- user prompt
- routing prompt
- repair-first prompt
- evaluation prompt
- trace-exposure prompt
- WFGY escalation prompt

If your contribution mixes several prompt roles, make it clear which one is the main asset and which ones are supporting blocks.

---

## 2. Atlas routing context ⭐

This is one of the most important sections in the whole template.

A prompt without routing context is much harder to review and much easier to misuse.

**Primary family**  
`F?`

**Secondary family**  
`F?` or `None`

**Broken invariant**  
Write one short sentence.

**Best current fit**  
Write the nearest node, family entry, or edge-fit wording.

**Why this prompt belongs here**  
Write 2 to 4 short sentences.

---

## 3. Problem this prompt addresses

Describe the specific repair or diagnosis problem.

Useful questions:

- what is going wrong
- why a prompt intervention is useful here
- what first move this prompt is supposed to support
- what this prompt is not trying to solve

Keep this short and concrete.

---

## 4. Intended use ⭐

State clearly how this prompt should be used.

Examples:

- after routing, before first repair
- after first repair failed
- before deeper WFGY escalation
- inside a notebook or workflow
- inside a benchmark rerun loop

Optional format:

**Use stage**  
`...`

**Target user**  
`...`

**Target environment**  
`...`

This section matters because a good prompt is not only about wording.  
It is also about timing and placement.

---

## 5. Inputs expected by the prompt

List the minimum inputs.

Examples:

- case description
- routed primary family
- broken invariant
- baseline failure output
- evidence snippets
- workflow state
- schema or constraints

Use a short format like:

~~~text
Input A:
Input B:
Input C:
~~~

---

## 6. Prompt body ⭐

Paste the actual prompt here.

Recommended format:

### System prompt

~~~text
...
~~~

### User prompt

~~~text
...
~~~

If only one prompt is needed, include only one block.

Keep this section focused.  
If the prompt body tries to handle too many jobs at once, the contribution is usually too broad.

---

## 7. Expected output shape ⭐

Describe what a good output should look like.

Examples:

- clearer routing justification
- better trace exposure
- cleaner first repair recommendation
- fewer unsupported claims
- more structured schema-preserving output

Optional format:

**Expected structure**

~~~text
...
~~~

**Expected improvement**

~~~text
...
~~~

This is one of the most reviewer-important sections.  
A prompt without an expected output shape is much harder to validate.

---

## 8. First repair connection ⭐

Explain how this prompt supports the official first repair move.

Useful questions:

- what first move does this prompt reinforce
- what family-level fix surface does it support
- why is prompt intervention appropriate here

Keep it short and concrete.

This section is one of the clearest signals that the prompt is a real atlas-aligned fix asset, not just an isolated prompt snippet.

---

## 9. Misrepair warning ⭐

This section is required.

### Wrong first move

`...`

### Why it is tempting

`...`

### Why this prompt should not be used that way

`...`

This helps prevent prompt assets from teaching bad repair habits.

---

## 10. Optional evaluation notes

If useful, list a few simple checks.

Examples:

- better support rate
- clearer stage localization
- fewer lost fields
- fewer wrong anchors
- higher schema pass rate

Optional format:

~~~text
Metric 1:
Metric 2:
Metric 3:
~~~

Only include fields that are actually useful.

---

## 11. Optional WFGY escalation

Use this only if the prompt is meant to bridge into deeper WFGY work.

### When to escalate

`...`

### What should be passed into WFGY

- routed family
- broken invariant
- first repair already attempted
- unresolved pressure

### What WFGY is expected to add

`...`

Do not use this section to skip atlas routing.

---

## 12. Limitations

Be honest.

Examples:

- only tested on short prompts
- only tested in one model family
- not suitable for long multi-agent traces
- helps diagnosis, not full repair
- still experimental

Short, honest limits are much better than inflated claims.

---

## 13. Files included

List the files included in the contribution.

Example:

- `prompt.md`
- `example_input.json`
- `expected_output.md`

---

## 14. One-line maintainer note

Write one short line that helps review the contribution.

Example:  
Small F5 prompt for improving trace visibility before deeper intervention.

---

## 15. Copy-paste mini skeleton ✂️

Use this when you want the fastest possible start.

~~~md
# Title

## 0. Quick summary
...

## 1. Prompt type
...

## 2. Atlas routing context
Primary family:
Secondary family:
Broken invariant:
Best current fit:
Why this prompt belongs here:

## 3. Problem this prompt addresses
...

## 4. Intended use
Use stage:
Target user:
Target environment:

## 5. Inputs expected by the prompt
...

## 6. Prompt body
### System prompt
...

### User prompt
...

## 7. Expected output shape
...

## 8. First repair connection
...

## 9. Misrepair warning
Wrong first move:
Why it is tempting:
Why this prompt should not be used that way:

## 10. Optional evaluation notes
...

## 11. Optional WFGY escalation
...

## 12. Limitations
...

## 13. Files included
...

## 14. One-line maintainer note
...
~~~

---

## Next steps ✨

After this page, most readers continue with:

1. [Back to Contribution Checklist](./contribution-checklist.md)
2. [Back to Templates Hub](./README.md)
3. [Back to Fix Recipe Template](./fix-recipe-template.md)
4. [Open Colab Template](./colab-template.md)

If you want to return to the broader product surface:

- [Back to Community Fix Lab](../community/README.md)
- [Back to Official Fixes](../official/README.md)
- [Back to Atlas landing page](../../../wfgy-ai-problem-map-troubleshooting-atlas.md)
- [Back to Atlas Hub](../../README.md)

If this template helps your workflow, consider:

- [starring the WFGY repo](https://github.com/onestardao/WFGY)
- opening an issue
- shipping one small clean prompt contribution 🌟

---

## 16. Closing note

A good prompt contribution does not need to be huge.

It only needs to be:

- routed
- clear
- scoped
- usable
- honest about limits
