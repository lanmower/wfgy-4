<!--
AI_NOTE_START

Document role:
This page presents the most representative public showcase cases for the current Inverse Atlas MVP.

What this page is for:
1. Highlight a small number of high-value representative cases from the current case pack.
2. Explain why these showcase cases were selected.
3. Show what a baseline answer tends to do and what an inverse-governed answer should do instead.
4. Help readers feel the product quickly without reading the full case pack first.

How to use this page:
1. Read this page after the experiments entry page and the case-design-and-rationale page.
2. Use this page when you want the most visible public examples first.
3. Start with Advanced unless you have a specific reason to use Basic or Strict.
4. Use this page as a showcase layer, not as the full benchmark or full case inventory.

Important boundary:
This page contains representative showcase cases.
It is not the full case pack and not the full benchmark program.
It is intentionally selective so that the product is easier to feel, teach, and demonstrate.

Recommended reading path:
1. Inverse Atlas README
2. FAQ
3. Versions
4. Experiments
5. Repro in 60 Seconds
6. Phase Overview
7. Case Design and Rationale
8. Showcase Cases
9. Results and Current Findings

AI_NOTE_END
-->

# 🧪 Experiments Hub

> The public entry point for reproduction, showcase, comparison, and current findings in the Inverse Atlas experiments layer

This page is the main entry point for the **experiments layer** of Inverse Atlas.

Its job is simple:

- show what the current public experiment surface contains
- help readers choose the right path quickly
- separate showcase material from reproduction material
- connect demo, evaluator, case design, and current findings into one readable flow

This page is **not** the full benchmark report.

It is the folder-level guide that helps a reader understand:

- where to start
- what each experiment page does
- which page is for fast product feeling
- which page is for reproduction
- which page is for design rationale
- which page is for current results

---

## 🧭 What This Experiments Layer Is For

The experiments layer exists to make Inverse Atlas inspectable in public.

It does not exist only to say the method sounds interesting.

It exists so readers can:

- run a fast contrast
- inspect representative showcase cases
- understand why the cases were designed this way
- see what the evaluator is checking
- follow the current results and boundaries honestly

At a high level, this layer turns Inverse Atlas from:

“a promising methodology description”

into

“a public artifact surface that can be reproduced, compared, questioned, and improved”

---

## ⚡ Fastest Entry Routes

Different readers need different paths.

### Option A · Fastest product feeling
Use this if you want the shortest path to “okay, I can see what this changes.”

1. Start with [Inverse Atlas Advanced](../runtime/inverse-advanced.txt)
2. Use the [Demo Harness](../runtime/inverse-demo.txt)
3. Open [Showcase Cases](./showcase-cases.md)
4. Start with one high-contrast case
5. Use the [Evaluator](../runtime/inverse-eval.txt) only after the contrast is already visible

### Option B · Reproduction first
Use this if you want the cleanest reproducible route.

1. Read [Reproduce in 60 Seconds](./repro-60-seconds.md)
2. Open the [Case Pack](../runtime/inverse-cases.txt)
3. Use the [Demo Harness](../runtime/inverse-demo.txt)
4. Compare outputs with the [Evaluator](../runtime/inverse-eval.txt)

### Option C · Understand the logic first
Use this if you want the experimental logic before running anything.

1. Read [Phase Overview](./phase-overview.md)
2. Read [Case Design and Rationale](./case-design-and-rationale.md)
3. Read [Showcase Cases](./showcase-cases.md)
4. Continue to [Results and Current Findings](./results-and-current-findings.md)

---

## 🧩 What Is Inside This Folder

### 1. [Showcase Cases](./showcase-cases.md)
The fastest high-value examples.

Use this page when you want the most visible public examples first.  
It is intentionally selective.  
It highlights the cases that reveal the framework quickly and clearly.

### 2. [Reproduce in 60 Seconds](./repro-60-seconds.md)
The shortest practical reproduction route.

Use this page when you want a clean first run without reading the full experiment layer.

### 3. [Case Design and Rationale](./case-design-and-rationale.md)
Why these cases exist and what they pressure.

Use this page when you want to understand the structural reason each case was chosen.

### 4. [Phase Overview](./phase-overview.md)
The current experiment structure by phase.

Use this page when you want the big picture of how the current MVP experiment layer is organized.

### 5. [Evidence Snapshot](./evidence-snapshot.md)
A compact public-facing view of what the experiment layer currently supports.

Use this page when you want a quick evidence-oriented overview.

### 6. [Results and Current Findings](./results-and-current-findings.md)
What the current public experiments suggest so far.

Use this page when you want the current findings without pretending the work is already finished.

### 7. [Case Studies](./case-studies/README.md)
Longer case-specific walkthroughs.

Use this section when you want deeper explanation page by page.

---

## 🔍 Core Experiment Surfaces

These pages are supported by a small set of public runtime artifacts.

### Runtime surfaces
- [Inverse Atlas Advanced](../runtime/inverse-advanced.txt)
- [Inverse Atlas Basic](../runtime/inverse-basic.txt)
- [Inverse Atlas Strict](../runtime/inverse-strict.txt)
- [Runtime Guide](../runtime-guide.md)
- [Runtime Notes](../runtime/README.md)

### Comparison surfaces
- [Demo Harness](../runtime/inverse-demo.txt)
- [Evaluator](../runtime/inverse-eval.txt)
- [Case Pack](../runtime/inverse-cases.txt)

These are the main public building blocks for current experiments.

A simple way to think about them is:

- the **runtime** changes the answer conditions
- the **demo harness** gives the comparison workflow
- the **case pack** provides pressure prompts
- the **evaluator** checks legality rather than swagger

---

## 🧠 What The Current Experiments Are Pressuring

The current experiments are not random difficulty samples.

They are built to pressure specific legality and governance boundaries, especially:

- lexical lure
- weak evidence
- neighboring-cut conflict
- cosmetic repair temptation
- forced illegal specificity
- public-ceiling violation
- long-context contamination

That means the experiment layer is not only asking:

“can the model answer?”

It is asking:

“does the system earn the right to answer this strongly, this narrowly, and this publicly?”

---

## 🛤️ Recommended Reading Paths

### If you are new
1. [Inverse Atlas README](../README.md)
2. [Reproduce in 60 Seconds](./repro-60-seconds.md)
3. [Showcase Cases](./showcase-cases.md)
4. [Results and Current Findings](./results-and-current-findings.md)

### If you want method before demo
1. [Inverse Atlas README](../README.md)
2. [Phase Overview](./phase-overview.md)
3. [Case Design and Rationale](./case-design-and-rationale.md)
4. [Showcase Cases](./showcase-cases.md)
5. [Results and Current Findings](./results-and-current-findings.md)

### If you want to run side-by-side comparisons
1. [Inverse Atlas Advanced](../runtime/inverse-advanced.txt)
2. [Demo Harness](../runtime/inverse-demo.txt)
3. [Case Pack](../runtime/inverse-cases.txt)
4. [Evaluator](../runtime/inverse-eval.txt)

---

## 📚 Related Pages Outside This Folder

- [Inverse Atlas README](../README.md)
- [FAQ](../FAQ.md)
- [Versions](../versions.md)
- [Quick Start](../quickstart.md)
- [Runtime Guide](../runtime-guide.md)
- [Status and Boundaries](../status-and-boundaries.md)
- [How Inverse Atlas Thinks](../how-inverse-atlas-thinks.md)
- [Paper Notes](../paper/README.md)
- [Figures](../figures/README.md)
- [Twin Atlas](../../Twin_Atlas/README.md)

---

## 📏 What This Page Does Not Claim

This page does not claim that:

- the current experiments are already the full benchmark program
- every model family has already been tested
- every phase has already been run at final scale
- showcase material is the same thing as final benchmark proof
- the full dual-layer Bridge is already complete here

This page only does one thing:

**it gives the clearest public entry point into the current Inverse Atlas experiments layer**

---

## 🌱 Final Note

A strong experiments layer should not feel like a pile of files.

It should feel like a guided public inspection surface.

That is the role of this page.

If the main README establishes what Inverse Atlas is, this page establishes how the current public experiment layer can actually be explored.
