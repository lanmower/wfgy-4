# A Sixteen-Failure Taxonomy for Retrieval-Augmented and Agentic Systems

## Abstract
We present a closed taxonomy of sixteen failure modes that account for the overwhelming majority of observed defects in RAG, multi-agent orchestration, and long-context reasoning. The taxonomy is paired with an Atlas — a routing structure that maps each symptom to its diagnostic gate, and each gate to a Global Fix verified against worked examples. The Twin and Inverse Atlases close the loop by surfacing the residual mode the user has not yet named.

## 1. Why a Closed Taxonomy
Open-ended bug reports do not reduce. Closing the taxonomy turns the question from "what is wrong?" into "which of the sixteen?", and from "how do I fix it?" into "which Global Fix applies?" The closure is empirical: in three years of triage, every defect has decomposed into one or more of the sixteen.

## 2. The Sixteen Modes
Hallucination, Boundary Drift, Citation Mismatch, Chunk Collapse, Memory Leak, Agent Convergence, Multi-Frame Contradiction, Symbolic Logic Drift, Long-Context Decay, Multimodal Misalignment, Bootstrap Order Inversion, Creative Freeze, Bluffing, Context-Drift Spiral, Data-Contract Breach, Safety-Boundary Crossing.

## 3. The Atlas Router
The Atlas is a decision tree from observed symptom to gate. Gating tests confirm or refute, and on confirmation the corresponding Global Fix is dispatched. The routing structure itself is the artifact — it can be loaded into any sufficiently capable model and used directly.

## 4. Twin Atlas, Inverse Atlas
The Twin Atlas catches co-occurring modes that mask each other. The Inverse Atlas catches non-symptoms — behaviors that look like bugs but are the system working correctly under an unstated constraint. Together they eliminate the diagnostic blind spots of a flat taxonomy.

## 5. The Grandma Clinic
Every Global Fix is paired with a plain-language translation. A fix whose Grandma Clinic explanation does not survive a non-technical reader has not been understood by its author either.

## 6. Conclusion
Governance of agentic systems begins with naming. The Problem Map names exhaustively, routes precisely, and verifies plainly. It is the gate through which every other layer of the WFGY ecosystem must pass.
