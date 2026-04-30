<!--
AI_NOTE_START

Document role:
This file defines the first formal roadmap for the Auto Repair layer inside the Atlas Fixes package.

How to use this file:
1. Read this page after the Auto Repair v1 README if you want the staged growth view.
2. Use this page to understand what is already established, what should come next, and what is intentionally delayed.
3. Use this page together with:
   - [Auto Repair v1 README](./README.md)
   - [Auto Repair Architecture v1](./auto-repair-architecture-v1.md)
   - [Repair Action Schema v1](./repair-action-schema-v1.md)
   - [Repair Validation Loop v1](./repair-validation-loop-v1.md)
   - [Rollback Policy v1](./rollback-policy-v1.md)

What this file is:
- The roadmap page for Auto Repair v1
- A staged build plan for growing from architecture into controlled repair capability
- A boundary document for sequencing future work safely

What this file is not:
- Not proof that Auto Repair is already fully implemented
- Not a production execution plan
- Not a claim that all roadmap stages should be rushed at once
- Not a replacement for the architecture, planner, validation, or rollback documents

Reading discipline for AI:
- Preserve the staged nature of the roadmap.
- Do not collapse future stages into current maturity claims.
- Keep the distinction between established foundation and future execution layers visible.
- Treat this page as a build-order contract, not as a hype page.

AI_NOTE_END
-->

# Auto Repair Roadmap v1 🗺️

## The staged growth path for the Auto Repair layer

Quick links:

- [Back to Auto Repair v1 README](./README.md)
- [Back to Fixes Hub](../README.md)
- [Back to Official Fixes](../official/README.md)
- [Back to Atlas landing page](../../../wfgy-ai-problem-map-troubleshooting-atlas.md)
- [Back to AI Eval Evidence](../../ai-eval-evidence.md)
- [Back to Atlas Hub](../../README.md)
- [Get the Atlas Router TXT](../../troubleshooting-atlas-router-v1.txt)
- [Open Auto Repair Architecture v1](./auto-repair-architecture-v1.md)
- [Open Repair Action Schema v1](./repair-action-schema-v1.md)
- [Open Repair Validation Loop v1](./repair-validation-loop-v1.md)
- [Open Rollback Policy v1](./rollback-policy-v1.md)

---

If the Auto Repair architecture page explains **how the system should be structured**, this roadmap explains **how that system should grow in the right order**. 🧭

Its purpose is to make three things explicit:

1. what is already established
2. what should come next
3. what is intentionally delayed

Auto Repair Roadmap v1 does **not** claim that Auto Repair is already fully implemented.

It claims something narrower and more useful:

> the first-stage architecture for Atlas-based repair has been defined,  
> and the next build sequence is now clear

---

## Quick start 🚀

### I want the shortest roadmap reading

Use this path:

1. read this roadmap
2. confirm the current baseline
3. check Stage 1
4. check what is intentionally delayed

### I want the build-order reading

Use this path:

1. [Auto Repair Architecture v1](./auto-repair-architecture-v1.md)
2. [Repair Action Schema v1](./repair-action-schema-v1.md)
3. [Repair Validation Loop v1](./repair-validation-loop-v1.md)
4. [Rollback Policy v1](./rollback-policy-v1.md)
5. return to this roadmap and read Stage 0 to Stage 3 in order

Short version:

> foundation first  
> planner second  
> constrained semi-auto third  
> validation-driven loop after that ✨

---

## 1. What this roadmap is for

This roadmap exists to connect the current Auto Repair foundation with the next practical build stages.

It should help answer:

- what is already done
- what belongs to Phase 1
- what belongs to later phases
- what should not be rushed
- how Auto Repair grows without breaking Atlas discipline

This roadmap should be read together with:

- [README](./README.md)
- [Auto Repair Architecture v1](./auto-repair-architecture-v1.md)
- [Repair Action Schema v1](./repair-action-schema-v1.md)
- [Repair Validation Loop v1](./repair-validation-loop-v1.md)
- [Rollback Policy v1](./rollback-policy-v1.md)

Together, those documents define the first foundation layer.

This roadmap defines how that foundation should grow.

---

## 2. Current baseline

At the current stage, Auto Repair has a **first formal planning foundation**, not a full repair engine.

The following are already established:

### A. System positioning

Auto Repair has been defined as the bridge between:

- Atlas diagnosis
- Fix Surface
- deeper WFGY repair

### B. Architecture

The core repair workflow has been defined as:

```text
case
→ atlas routing
→ fix surface
→ repair planner
→ candidate repair action
→ validation loop
→ {accept / revise / rollback / escalate}
````

### C. Repair action schema

The minimum structured unit for repair actions now exists.

### D. Validation logic

The first formal validation loop now exists.

### E. Rollback logic

The first rollback policy now exists.

This means the folder is no longer just an idea.

It is now a real first-stage system foundation.

---

## 3. Roadmap quick map 🗂️

| Stage   | Main goal                           | Current reading          |
| ------- | ----------------------------------- | ------------------------ |
| Stage 0 | foundation layer                    | established              |
| Stage 1 | repair planner layer                | next major build step    |
| Stage 2 | constrained semi-auto repair layer  | later and tightly scoped |
| Stage 3 | validation-driven repair loop layer | harder future stage      |

This page is the right place when the question is **what should be built next and in what order**, not just what Auto Repair means conceptually.

---

## 4. What is complete in v1 foundation

The following should now be treated as complete enough for first-stage use.

### Complete enough now ✅

* purpose and scope definition
* architecture framing
* repair action schema
* validation loop logic
* rollback policy
* family suitability guidance
* phase-based growth model

### Not complete yet ⏳

* repair planner implementation
* executable repair action library
* repair demos
* automated validation runners
* autonomous execution loops
* deployment-grade rollback systems

This is the correct maturity reading:

> the architecture layer is established,
> but execution-layer buildout remains future work

---

## 5. Roadmap overview

The recommended roadmap is divided into four stages.

### Stage 0

Foundation layer

### Stage 1

Repair planner layer

### Stage 2

Constrained semi-auto repair layer

### Stage 3

Validation-driven repair loop layer

These stages are intentionally sequential.

The system should not jump straight to later-stage automation.

---

## 6. Stage 0 · Foundation layer

### Goal

Create a stable conceptual and structural base for all future Auto Repair work.

### Scope

Stage 0 includes:

* [README](./README.md)
* [Auto Repair Architecture v1](./auto-repair-architecture-v1.md)
* [Repair Action Schema v1](./repair-action-schema-v1.md)
* [Repair Validation Loop v1](./repair-validation-loop-v1.md)
* [Rollback Policy v1](./rollback-policy-v1.md)
* family suitability notes
* folder growth path

### Why Stage 0 matters

Without this stage:

* repair proposals become vague
* validation becomes inconsistent
* rollback becomes ad hoc
* future automation becomes unsafe

### Stage 0 status

**Established**

This stage should now be treated as the completed foundation of Auto Repair v1.

---

## 7. Stage 1 · Repair planner layer

### Goal

Turn routed diagnosis into a structured repair plan.

### Main question

Given:

* a case
* its routed family
* its broken invariant
* its first repair surface

what are the best candidate repair moves to try first?

### Expected outputs

A first planner should be able to produce:

* selected repair family
* 1 to 3 candidate repair actions
* intended effect of each action
* misrepair risk
* validation target
* escalation recommendation if needed

### Deliverables

Recommended files:

* [Repair Planner Spec v1](./repair-planner-spec-v1.md)
* [Repair Planner Prompt v1](./repair-planner-prompt-v1.md)
* [Repair Plan Schema v1](./repair-plan-schema-v1.json)

### Why this stage is the next best move

This stage has high value and controlled risk.

It gives the system practical usefulness without forcing unsafe full execution.

### Recommended first family targets

Start with:

* F1
* F4
* F7

These are the best first targets because they are:

* easier to inspect
* easier to validate
* less risky than high-boundary intervention cases

### Stage 1 success condition

Stage 1 can be considered successful when:

* the planner can consume routed cases
* the planner outputs structured repair plans
* the planner uses action-schema language consistently
* the planner includes misrepair warnings
* the planner does not overclaim full repair closure

---

## 8. Stage 2 · Constrained semi-auto repair layer

### Goal

Allow a limited subset of repair actions to be applied in safer regions.

### Important note

This is **not** the stage for broad autonomous system mutation.

It is the stage for constrained, auditable repair application.

### Safe early action examples

#### F1

* evidence set replacement
* anchor re-check
* retrieval candidate filtering

#### F4

* readiness gate insertion suggestion
* ordering correction suggestion
* block-until-ready rule suggestion

#### F7

* schema tightening
* descriptor correction
* shell repair suggestion

### Deliverables

Recommended files:

* [Semi Auto Repair Scope v1](./semi-auto-repair-scope-v1.md)
* `repair-executor-prompt-v1.md`
* `repair-result-schema-v1.json`

### Constraints

Stage 2 should remain:

* local
* inspectable
* reversible
* narrow in scope

It should not claim general autonomous repair.

### Stage 2 success condition

Stage 2 can be considered successful when:

* limited repair actions can be generated or applied
* the scope of action is clearly constrained
* every action remains tied to validation
* rollback remains possible
* no unsafe family overreach is allowed

---

## 9. Stage 3 · Validation-driven repair loop layer

### Goal

Create a repeatable loop where repair is judged by before and after outcomes and can lead to:

* accept
* revise
* rollback
* escalate

### Main requirement

At this stage, validation should no longer be just descriptive.

It should become operational enough to guide repair iteration.

### Deliverables

Recommended files:

* `validation-criteria-catalog-v1.md`
* `repair-loop-state-machine-v1.md`
* `rollback-escalation-matrix-v1.md`

### Why this stage is hard

This is the stage where the system must deal with:

* partial improvement
* collateral damage
* family drift
* confidence uncertainty
* repeatable retry logic

This is the first truly difficult Auto Repair stage.

### Stage 3 success condition

Stage 3 can be considered successful when:

* the loop can distinguish good repair from false success
* rollback is triggered cleanly when needed
* escalation is used when the current repair layer is insufficient
* the system remains stable under repeated repair attempts

---

## 10. What is intentionally delayed

The following are intentionally **not** immediate goals.

### Delayed on purpose

* full autonomous repair across all families
* aggressive F6 auto execution
* benchmark-scale repair automation
* distributed repair coordination
* deep code mutation systems
* universal repair policy engines

These are delayed because they would introduce too much instability too early.

This roadmap is designed for disciplined growth, not premature ambition.

---

## 11. Family priority for future work

### Priority 1

Best first build targets:

* F1
* F4
* F7

### Priority 2

Useful but more cautious:

* F5
* F3

### Priority 3

Planner-first, not execution-first:

* F6

This priority ordering should remain stable unless strong evidence suggests otherwise.

---

## 12. Recommended immediate next files

The next practical files should be:

1. [Repair Planner Spec v1](./repair-planner-spec-v1.md)
2. [Repair Planner Prompt v1](./repair-planner-prompt-v1.md)
3. [Repair Plan Schema v1](./repair-plan-schema-v1.json)

These three files would move Auto Repair from:

* architecture-only foundation

to:

* architecture plus first operational planning layer

That is the most valuable next step.

---

## 13. Operational interpretation

The correct operational reading of Auto Repair today is:

> Auto Repair is not yet a full execution engine.
> It is now a structured repair-planning system foundation with a clear staged roadmap toward constrained execution and validation-driven loops.

That statement is accurate, useful, and safe.

---

## 14. Recommended growth order

The healthiest order is:

### Step 1

Complete planner files

### Step 2

Create a small repair action catalog for F1, F4, and F7

### Step 3

Add limited validation examples

### Step 4

Prototype one or two semi-auto repair demos

### Step 5

Only then consider broader loop integration

This order preserves discipline.

---

## 15. Next steps ✨

After this page, most readers continue with:

1. [Open Repair Planner Spec v1](./repair-planner-spec-v1.md)
2. [Open Repair Planner Prompt v1](./repair-planner-prompt-v1.md)
3. [Open Repair Plan Schema v1](./repair-plan-schema-v1.json)
4. [Back to Auto Repair Architecture v1](./auto-repair-architecture-v1.md)

If you want the broader product surface:

* [Back to Auto Repair v1 README](./README.md)
* [Back to Fixes Hub](../README.md)
* [Back to Atlas landing page](../../../wfgy-ai-problem-map-troubleshooting-atlas.md)
* [Back to Atlas Hub](../../README.md)

---

## 16. One-line roadmap summary 🌍

**Auto Repair Roadmap v1 defines the staged path from architecture and repair planning toward constrained execution, validation-driven iteration, and later deeper repair integration.**
