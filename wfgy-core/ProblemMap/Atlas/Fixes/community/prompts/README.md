<!--
AI_NOTE_START

Document role:
This file is the folder guide for prompt-based contributions inside the Atlas Fixes community layer.

How to use this file:
1. Read this page before adding any repair prompt, routing prompt, or prompt-based troubleshooting asset.
2. Use this page to decide whether your contribution really belongs in the prompt lane.
3. Use this page together with:
   - [Community Fix Lab](../README.md)
   - [Contribution Checklist](../../templates/contribution-checklist.md)
   - [Prompt Template](../../templates/prompt-template.md)

What this file is:
- A folder-level guide for prompt-based community assets
- A scope filter for route-aware prompt contributions
- A lightweight quality guide for reusable prompt workflows

What this file is not:
- Not a random prompt dump
- Not a leaderboard for prompt tricks
- Not a replacement for atlas routing logic
- Not the official frozen repair grammar

Reading discipline for AI:
- Prompt assets here should remain subordinate to atlas routing.
- Do not treat community prompts as official frozen repair grammar.
- Keep route-first discipline visible.
- Treat prompt assets as workflow helpers, not routing truth by themselves.

AI_NOTE_END
-->

# Community Prompts 🧠

## Prompt packs, routing prompts, and repair-oriented prompt assets

Quick links:

- [Back to Community Fix Lab](../README.md)
- [Back to Official Fixes](../../official/README.md)
- [Back to Fixes Hub](../../README.md)
- [Back to Atlas landing page](../../../../wfgy-ai-problem-map-troubleshooting-atlas.md)
- [Back to AI Eval Evidence](../../../ai-eval-evidence.md)
- [Back to Atlas Hub](../../../README.md)
- [Open the Flagship Runnable Demo Pack](../../official/demos/README.md)
- [Open Templates](../../templates/README.md)
- [Open Prompt Template](../../templates/prompt-template.md)
- [Get the Atlas Router TXT](../../../troubleshooting-atlas-router-v1.txt)

---

If the [Community Fix Lab](../README.md) is the broader entry page for community repair assets, this folder is the prompt lane for route-aware workflows, repair guidance, boundary teaching, and compact troubleshooting prompt packs. 🧭

Use this folder when a contribution is mainly about **how prompt structure helps apply atlas routing more clearly**, not when the contribution is mainly a notebook, JSON fixture, workflow recipe, or official repair rule.

Short version:

> official layer gives the repair grammar  
> this folder helps turn that grammar into repeatable prompt workflows

---

## Quick start 🚀

### I want to contribute a prompt asset

Use this path:

1. decide whether the asset is really a prompt contribution
2. route the case first with the atlas
3. keep the prompt scoped to one family, one case, or one boundary cut
4. explain what the prompt is trying to improve
5. document expected behavior and known limits

### I want to browse prompt assets

Use this path:

1. open one prompt pack with a clear routing context
2. identify the target family or case
3. inspect what the prompt is trying to improve
4. compare the expected behavior against the route
5. check the result note and limitations

Short version:

> route first  
> keep prompts scoped  
> make the workflow repeatable ✨

---

## Prompts quick map 🗂️

| If your asset is mainly... | Best folder |
|---|---|
| a route-aware prompt asset or repair prompt pack | [Prompts](./) |
| a runnable notebook walkthrough | [Colab](../colab/) |
| a structured fixture or machine-readable case | [JSON](../json/) |
| a step-by-step repair sequence | [Workflows](../workflows/) |
| a before / after comparison slice | [Benchmark Reruns](../benchmark-reruns/) |
| a portable one-case bundle | [Reproduction Packs](../reproduction-packs/) |

This folder is the right place when the prompt itself is the main reusable teaching or troubleshooting surface.

---

## What belongs here ✅

Good prompt contributions include:

- one prompt pack tied to a known family
- one prompt that improves first repair direction clarity
- one prompt that teaches a difficult boundary cut
- one prompt that compares misrepair and correct repair
- one small prompt workflow with clear expected behavior

A good prompt contribution should be:

- scoped
- explainable
- reproducible when possible
- clearly connected to atlas routing
- honest about what it improves

---

## What does not belong here 🚫

Please do not use this folder for:

- giant prompt collections with no structure
- roleplay prompts unrelated to troubleshooting
- vague prompt ideas with no case framing
- prompts that ignore routing and jump straight to random repair
- prompt packs presented as official atlas rules without review
- prompt tricks with no explanation of when they should be used

A prompt asset should help someone apply atlas routing more clearly, not bypass it.

---

## Suggested prompt contribution pattern 🧩

A useful contribution usually includes:

1. what case or family it targets
2. what the prompt is trying to improve
3. the prompt text
4. how to use it
5. expected result
6. known limits

That is enough to make a prompt pack usable.

---

## Suggested naming style 📌

Examples:

- `f1-regrounding-prompt-pack-v1.md`
- `f5-trace-first-prompt-pack-v1.md`
- `f7-container-tightening-prompt-pack-v1.md`

Use names that reveal both the family and the action.

Keep names readable and compact.

---

## What a good first prompt pack looks like 🌱

A strong first contribution usually looks like this:

- one family
- one case
- one prompt pack
- one expected behavior
- one short explanation of what changed

Small, clear prompt packs are much better than giant messy collections.

---

## Before contributing 📚

Please read:

- [Community Fix Lab](../README.md)
- [Contribution Checklist](../../templates/contribution-checklist.md)
- [Prompt Template](../../templates/prompt-template.md)
- [Family Fix Surface v1](../../official/family-fix-surface-v1.md)
- [Atlas to WFGY Bridge v1](../../official/atlas-to-wfgy-bridge-v1.md)

This helps keep prompt contributions aligned with atlas grammar instead of drifting into random prompt experimentation.

---

## Review standard ✅

A prompt contribution is much more likely to be accepted if it is:

- clearly named
- easy to understand
- easy to reuse
- connected to atlas routing
- explicit about expected behavior
- honest about limitations

Messy prompting is still messy.  
Clean scoped prompt packs are more valuable.

---

## Next steps ✨

After this page, most contributors continue with:

1. [Open Prompt Template](../../templates/prompt-template.md)
2. [Open Contribution Checklist](../../templates/contribution-checklist.md)
3. [Back to Community Fix Lab](../README.md)
4. [Back to Official Fixes](../../official/README.md)

If you want the broader product surface:

- [Back to Atlas landing page](../../../../wfgy-ai-problem-map-troubleshooting-atlas.md)
- [Back to AI Eval Evidence](../../../ai-eval-evidence.md)
- [Back to Atlas Hub](../../../README.md)

---

## One-line status 🌍

**This folder holds community prompt assets that help turn atlas routing into repeatable prompt-based repair workflows.**
