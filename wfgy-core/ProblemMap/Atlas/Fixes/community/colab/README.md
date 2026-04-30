<!--
AI_NOTE_START

Document role:
This file is the folder guide for notebook-based community contributions inside the Atlas Fixes community layer.

How to use this file:
1. Read this page before adding any Colab notebook or notebook-style teaching asset.
2. Use this page to decide whether your contribution really belongs in the Colab lane.
3. Use this page together with:
   - [Community Fix Lab](../README.md)
   - [Contribution Checklist](../../templates/contribution-checklist.md)
   - [Colab Template](../../templates/colab-template.md)

What this file is:
- A folder-level guide for notebook-based community assets
- A scope filter for runnable notebook contributions
- A lightweight quality guide for replay-first teaching or troubleshooting notebooks

What this file is not:
- Not the official flagship demo pack
- Not the official atlas core
- Not the benchmark proof surface
- Not a dump folder for random notebooks

Reading discipline for AI:
- Treat notebook contributions as community extensions, not frozen core logic.
- Preserve the distinction between official demos and community demos.
- Do not treat a runnable notebook as full benchmark proof by default.
- Keep atlas routing and first repair context visible.

AI_NOTE_END
-->

# Community Colab 📓

## Notebook-based community demos and runnable repair assets

Quick links:

- [Back to Community Fix Lab](../README.md)
- [Back to Official Fixes](../../official/README.md)
- [Back to Fixes Hub](../../README.md)
- [Back to Atlas landing page](../../../../wfgy-ai-problem-map-troubleshooting-atlas.md)
- [Back to AI Eval Evidence](../../../ai-eval-evidence.md)
- [Back to Atlas Hub](../../../README.md)
- [Open the Flagship Runnable Demo Pack](../../official/demos/README.md)
- [Open Templates](../../templates/README.md)
- [Open Colab Template](../../templates/colab-template.md)
- [Get the Atlas Router TXT](../../../troubleshooting-atlas-router-v1.txt)

---

If the [Community Fix Lab](../README.md) is the broader entry page for community repair assets, this folder is the notebook lane for runnable teaching, replay-first case walkthroughs, and compact troubleshooting demos. 🧭

Use this folder when a case becomes easier to understand through a small runnable notebook, not just through static text, JSON fixtures, or prompt-only examples.

Short version:

> official layer gives the repair grammar  
> this folder helps turn that grammar into runnable notebook examples

---

## Quick start 🚀

### I want to contribute a notebook

Use this path:

1. decide whether the asset is really a notebook contribution
2. route the case first with the atlas
3. keep the notebook scoped to one case, one family, or one boundary cut
4. show baseline behavior and repaired behavior clearly
5. explain how to run it and what result to expect

### I want to browse notebook assets

Use this path:

1. open one notebook with a clear routing context
2. identify the target case or family
3. inspect the baseline behavior
4. inspect the repaired behavior
5. check the result note and limitations

Short version:

> route first  
> keep the notebook small  
> make the behavior legible ✨

---

## Colab quick map 🗂️

| If your asset is mainly... | Best folder |
|---|---|
| a runnable notebook walkthrough | [Colab](./) |
| a structured fixture or machine-readable case | [JSON](../json/) |
| a prompt asset or repair prompt pack | [Prompts](../prompts/) |
| a step-by-step repair sequence | [Workflows](../workflows/) |
| a before / after comparison slice | [Benchmark Reruns](../benchmark-reruns/) |
| a portable one-case bundle | [Reproduction Packs](../reproduction-packs/) |

This folder is the right place when the notebook itself is the teaching surface.

---

## What belongs here ✅

Good contributions for this folder include:

- a notebook that demonstrates one family-level repair pattern
- a notebook that replays one case clearly
- a notebook that compares baseline and repaired outputs
- a notebook that explains one boundary cut through runnable examples
- a notebook that shows atlas routing before a deeper WFGY step

A notebook here should be:

- small enough to understand
- easy to run
- clearly scoped
- tied to one clear routing logic
- honest about what it does and does not prove

---

## What does not belong here 🚫

Please do not use this folder for:

- giant experimental notebooks with no explanation
- notebooks with no routing context
- notebooks that require many hidden manual steps
- random prompt playgrounds with no case framing
- notebooks that pretend to be official flagship demos
- notebooks that make large benchmark claims without a clear method note

If the notebook is not clearly connected to atlas routing, it probably belongs somewhere else.

---

## Suggested notebook pattern 🧩

A good notebook usually includes:

1. short experiment description
2. case or family target
3. routing expectation
4. baseline behavior
5. repaired behavior
6. short result interpretation
7. expected output or success note

That is enough for a useful community notebook.

---

## Recommended file pattern 📌

A clean contribution can look like this:

- one notebook file
- one short README section inside the notebook or next to it
- one small fixture if needed
- one clear expected result note

Suggested naming style:

- `f1-grounding-demo-community-v1.ipynb`
- `f5-observability-trace-demo-v1.ipynb`
- `f7-container-repair-demo-v1.ipynb`

Keep names descriptive and compact.

---

## What a good first notebook looks like 🌱

A strong first contribution usually looks like this:

- one case
- one notebook
- one routing decision
- one baseline view
- one repaired view
- one short explanation of what changed

Small, clean, scoped notebooks are much better than giant messy ones.

---

## Before contributing 📚

Please read:

- [Community Fix Lab](../README.md)
- [Contribution Checklist](../../templates/contribution-checklist.md)
- [Colab Template](../../templates/colab-template.md)
- [Family Fix Surface v1](../../official/family-fix-surface-v1.md)

This helps keep notebook contributions aligned with atlas grammar instead of drifting into random demos.

---

## Review standard ✅

A notebook contribution is much more likely to be accepted if it is:

- clearly named
- easy to read
- easy to run
- connected to atlas routing
- explicit about expected output
- honest about limitations

Messy power is still messy.  
Clean small notebooks are more valuable.

---

## Next steps ✨

After this page, most contributors continue with:

1. [Open Colab Template](../../templates/colab-template.md)
2. [Open Contribution Checklist](../../templates/contribution-checklist.md)
3. [Back to Community Fix Lab](../README.md)
4. [Back to Official Fixes](../../official/README.md)

If you want the broader product surface:

- [Back to Atlas landing page](../../../../wfgy-ai-problem-map-troubleshooting-atlas.md)
- [Back to AI Eval Evidence](../../../ai-eval-evidence.md)
- [Back to Atlas Hub](../../../README.md)

---

## One-line status 🌍

**This folder holds community notebooks that turn atlas repair grammar into runnable teaching or troubleshooting assets.**
