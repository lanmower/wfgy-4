# ❓ Inverse Atlas FAQ

> This FAQ is organized for fast reading, product onboarding, and structural clarity.
> If you are new here, start with the first section and use the shortest path first.

## 1. Fast Product Questions ⚡

<details>
<summary><strong>1. What is Inverse Atlas?</strong></summary>

> Inverse Atlas is a legitimacy-first AI runtime.
>
> It does not begin by asking:
>
> "how do we improve the answer after it appears?"
>
> It begins earlier and asks:
>
> **has the system actually earned the right to answer at this level at all**
>
> The core shift is simple:
>
> **generation is not treated as a default right**
>
> **generation is treated as an authorized act**
>
> That is why Inverse Atlas is not just a style layer.
> It is a pre-generative governance layer.

</details>

<details>
<summary><strong>2. I only have one minute. What should I click first?</strong></summary>

> Use this order:
>
> 1. Start with **Inverse Atlas Advanced**
> 2. Run the **Demo Harness**
> 3. Pick one case from the **Case Pack**
> 4. Compare baseline vs inverse-governed output
> 5. Use the **Evaluator** if you want the legality comparison
>
> If you want the shortest product-feeling path, do not start with theory first.
> Start with:
>
> - Advanced
> - Demo
> - one killer case
> - evaluator
>
> Then go to the paper if you want the formal framing.

</details>

<details>
<summary><strong>3. Which runtime should I start with?</strong></summary>

> For most serious users:
>
> **start with Advanced**
>
> That is the best current default.
>
> Use **Basic** if you want the easiest entry and the lowest friction.
>
> Use **Strict** if you are doing audit, benchmark-style comparison, research, or hard legality pressure testing.

</details>

<details>
<summary><strong>4. What is the real difference between Basic, Advanced, and Strict?</strong></summary>

> They are not just differently named copies.
>
> They expose different balances between friction and discipline.
>
> **Basic**
>
> > Lower friction.
> >
> > More natural prose.
> >
> > Better for easy onboarding, casual first use, and lightweight daily testing.
> >
> > It still follows the core legality logic, but it tries to stay user-friendly and not expose too much internal structure.
>
> **Advanced**
>
> > The recommended default.
> >
> > Best balance between legitimacy discipline and practical usability.
> >
> > Good for real demos, product-facing use, serious daily use, and most public comparisons.
>
> **Strict**
>
> > The hardest legality discipline.
> >
> > Best for audit, research, structured-output inspection, benchmark pressure, and black-hat style testing.
> >
> > It is more explicit, more contract-driven, and less forgiving about over-resolution.

</details>

<details>
<summary><strong>5. When should I use Strict instead of Advanced?</strong></summary>

> Use **Strict** when you care more about inspection than comfort.
>
> Good reasons to use Strict:
>
> - you want structured output
> - you want the clearest state code
> - you are pressure-testing legality boundaries
> - you are doing benchmark-style comparison
> - you want to inspect repair legality and public ceiling behavior more explicitly
>
> Use **Advanced** when you want the strongest general default without turning every run into an audit report.

</details>

<details>
<summary><strong>6. Is this just a stricter prompt?</strong></summary>

> No.
>
> It is not just "be more careful" rewritten in cleaner language.
>
> It changes the order of generation.
>
> Instead of:
>
> - answer first
> - soften later
> - repair after overclaim
>
> Inverse Atlas asks:
>
> **is this answer lawful enough to be emitted at this level yet**
>
> That makes it a governance runtime, not just a carefulness prompt.

</details>

<details>
<summary><strong>7. What is the shortest correct way to explain Inverse Atlas?</strong></summary>

> Use this:
>
> **Troubleshooting Atlas**
>
> > Where is the failure most likely located?
>
> **Inverse Atlas**
>
> > Has the system actually earned the right to resolve that failure this strongly yet?
>
> That is the shortest clean explanation of the difference between the two layers.

</details>

---

## 2. Why This Exists 🧠

<details>
<summary><strong>8. Why does Inverse Atlas exist if Troubleshooting Atlas already exists?</strong></summary>

> Because route-first structural mapping is useful, but not enough.
>
> The forward atlas, [Troubleshooting Atlas](../wfgy-ai-problem-map-troubleshooting-atlas.md), helps a system ask:
>
> - what structural region are we probably in
> - what failure family seems active
> - what broken invariant is likely involved
> - what first repair direction seems promising
>
> That is powerful.
>
> But it still leaves a second failure class untouched:
>
> - premature closure
> - false precision
> - unresolved neighboring routes collapsing too early
> - cosmetic repair being presented as structural repair
> - public output exceeding what has actually been earned
>
> So Inverse Atlas exists because the success of Troubleshooting Atlas revealed the next missing layer:
>
> **governance before answer emission**

</details>

<details>
<summary><strong>9. What problem is Inverse Atlas mainly trying to solve?</strong></summary>

> The main target is not generic answer quality.
>
> The main target is:
>
> **illegitimate generation**
>
> That includes cases where a model:
>
> - resolves too early
> - sounds more certain than the support allows
> - treats a plausible route as if it were final
> - presents cosmetic repair as structural repair
> - emits public-facing conclusions beyond current support
>
> In other words:
>
> it is not just trying to make AI answer better
>
> it is trying to make AI answer lawfully

</details>

<details>
<summary><strong>10. Why is this not just another checker, verifier, or safety wrapper?</strong></summary>

> Because it operates earlier.
>
> A lot of safety, moderation, verification, or grounding systems begin after generation is already underway or already finished.
>
> Inverse Atlas intervenes earlier.
>
> It governs the transition from input to answer itself.
>
> So it should not be understood as just:
>
> - another classifier
> - another verifier
> - another wrapper
> - another refusal layer
>
> It is better understood as a pre-generative governance framework for AI legitimacy.

</details>

<details>
<summary><strong>11. Why can a useful answer still be illegitimate?</strong></summary>

> Because usefulness and legitimacy are not the same thing.
>
> A strong-looking answer can still be unlawful if it:
>
> - outruns evidence
> - collapses ambiguity dishonestly
> - overstates route separation
> - presents cosmetic cleanup as structural repair
> - exceeds public ceiling
>
> A lawful answer may look shorter, more cautious, or less theatrical.
>
> That does not make it weaker.
>
> It may simply mean the model did not pretend to know more than it had earned.

</details>

<details>
<summary><strong>12. Is this mainly about hallucination?</strong></summary>

> Hallucination is part of it, but not all of it.
>
> Inverse Atlas is broader than "stop random nonsense."
>
> It is especially concerned with:
>
> - false certainty
> - premature diagnosis
> - fake structural closure
> - cosmetic repair inflation
> - unsupported public resolution
>
> So yes, it can help reduce expensive hallucination-like behavior.
>
> But the framework is not limited to hallucination in the narrow sense.
> It is about generation legitimacy more broadly.

</details>

---

## 3. How It Works 🛠️

<details>
<summary><strong>13. What are the main legality gates?</strong></summary>

> At MVP level, Inverse Atlas follows a legality-first chain:
>
> 1. **Problem Constitution**
> 2. **World Alignment**
> 3. **Route / Collapse Estimate**
> 4. **Neighboring-Cut Review**
> 5. **Resolution Authorization**
> 6. **Repair Legality**
> 7. **Public Emission Ceiling Control**
>
> These are not decorative steps.
>
> They are the main structural gates that determine:
>
> - whether the system may answer
> - how strongly it may answer
> - whether ambiguity must be preserved
> - whether repair is really structural
> - whether the visible answer is stronger than what was actually earned

</details>

<details>
<summary><strong>14. What are STOP, COARSE, UNRESOLVED, and AUTHORIZED?</strong></summary>

> These are not style labels.
>
> They are legal output modes.
>
> **STOP**
>
> > The system is not currently entitled to produce substantive resolution.
>
> **COARSE**
>
> > A broad structural direction is visible, but finer detail would currently overreach.
>
> **UNRESOLVED**
>
> > A leading route exists, but a neighboring route is still materially alive.
> >
> > Stronger closure would be dishonest.
>
> **AUTHORIZED**
>
> > The current problem frame, world alignment, route separation, and requested detail are strong enough to justify strong output.
>
> The key principle is:
>
> **AUTHORIZED is earned, not assumed**

</details>

<details>
<summary><strong>15. Why is staying unresolved considered a success instead of a failure?</strong></summary>

> Because preserving real ambiguity honestly is often more lawful than forcing fake closure.
>
> A lot of AI errors are not random nonsense.
> They are locally plausible overcommitments inside a contested region.
>
> Inverse Atlas treats preserved ambiguity as disciplined governance, not embarrassment.

</details>

<details>
<summary><strong>16. What is neighboring-cut review?</strong></summary>

> Neighboring-cut review asks:
>
> **what is the nearest competing route, and is it still materially alive**
>
> This matters because a model can see one plausible route and jump too quickly into certainty.
>
> Inverse Atlas forces a second question:
>
> is this route really separated enough from the nearest competing cut
>
> If the answer is no, the system should not present node-level certainty as if closure had already been earned.

</details>

<details>
<summary><strong>17. What is repair legality?</strong></summary>

> Repair legality asks a harder question than:
>
> "did the answer sound helpful?"
>
> It asks:
>
> **did the proposed fix actually touch the broken structural condition**
>
> In practice, Inverse Atlas distinguishes between:
>
> - none
> - tentative
> - structural
> - cosmetic_only
>
> That means:
>
> - rewriting
> - reformatting
> - summarizing
> - polishing
> - reframing
>
> are not automatically structural repair.
>
> If the broken condition is not really being touched, the repair should not be labeled structural.

</details>

<details>
<summary><strong>18. What is public emission ceiling?</strong></summary>

> Public emission ceiling means:
>
> **the visible answer must not be stronger than what the earlier legality checks have actually earned**
>
> A model may hold a provisional internal route.
>
> That does not automatically mean it is allowed to publicly emit that route as if it were final.
>
> Public restraint is not weakness.
>
> In this framework, it is lawful behavior.

</details>

<details>
<summary><strong>19. Can Inverse Atlas still be helpful if it does not fully authorize a detailed answer?</strong></summary>

> Yes.
>
> That is one of the most important ideas in the whole line.
>
> A good inverse-governed answer may still:
>
> - state the broad structural shape
> - explain what is blocking stronger resolution
> - preserve the leading route without pretending certainty
> - clarify missing conditions
> - give lawful partial help
>
> Lawful incompleteness is often better than illegal completeness.

</details>

---

## 4. Demo, Cases, and Evaluation 🎯

<details>
<summary><strong>20. What does the killer demo actually show?</strong></summary>

> The killer demo is not:
>
> "look, the answer sounds nicer"
>
> The killer demo is:
>
> "look where ordinary direct generation over-resolves, overcommits, fakes repair, or speaks past its evidence ceiling, and how Inverse Atlas changes that order"
>
> A good demo should reveal:
>
> - whether baseline escalated too early
> - whether baseline skipped neighboring-cut separation
> - whether baseline overclaimed certainty
> - whether baseline offered cosmetic repair as if structural
> - whether Inverse Atlas stayed at STOP / COARSE / UNRESOLVED / AUTHORIZED lawfully

</details>

<details>
<summary><strong>21. Why can the baseline sound stronger and still lose?</strong></summary>

> Because confidence tone is not legality.
>
> A baseline answer may look:
>
> - more decisive
> - more detailed
> - more fluent
> - more final
>
> and still be less lawful.
>
> That is why the evaluator does not reward:
>
> - swagger
> - verbosity
> - decorative structure
> - strong-looking closure
>
> It rewards:
>
> - lawful restraint
> - lawful ambiguity
> - lawful repair
> - lawful public emission

</details>

<details>
<summary><strong>22. Which cases should I try first?</strong></summary>

> Start with these four:
>
> 1. **Thin Evidence Forced Confidence**
> 2. **Neighboring-Cut Conflict**
> 3. **Illegal Resolution Demand**
> 4. **World-Alignment Instability**
>
> These are the cleanest early demonstrations because they show that:
>
> - user pressure should not raise legitimacy
> - ambiguity should not be collapsed dishonestly
> - exactness should not be forced without authorization
> - vague symptoms alone should not produce strong structural closure

</details>

<details>
<summary><strong>23. Why were these 8 cases chosen?</strong></summary>

> The MVP case pack was chosen to pressure legality boundaries directly.
>
> The cases are not meant to represent all possible AI failure.
>
> They are meant to stress cases where legality-first governance should diverge meaningfully from default direct generation.
>
> The design principles are:
>
> - pressure legality boundaries directly
> - keep the difference visible to human observers
> - stress core risks like topic lure, thin evidence, route contestability, cosmetic repair pressure, illegal specificity demand, and long-context contamination
> - remain compact enough for fast artifact-level testing
> - stay compatible with baseline-vs-inverse comparison

</details>

<details>
<summary><strong>24. What does a good result look like for each case?</strong></summary>

> A good result does **not** always mean AUTHORIZED.
>
> In many cases, a good result is actually:
>
> - STOP
> - COARSE
> - UNRESOLVED
>
> For example:
>
> - Thin Evidence Forced Confidence often should land in **COARSE or STOP**
> - Neighboring-Cut Conflict often should land in **UNRESOLVED**
> - World-Alignment Instability often should land in **STOP or COARSE**
>
> This is one of the most important mindset shifts.
>
> Inverse Atlas is not trying to maximize assertiveness.
> It is trying to maximize lawful resolution.

</details>

<details>
<summary><strong>25. How do you measure whether Inverse Atlas helped?</strong></summary>

> The cleanest MVP measurement surface is legality-centered.
>
> A simple public measurement structure is:
>
> 1. **Legality Win Rate**
> 2. **Failure Code Reduction**
> 3. **Expected-State Match**
> 4. **Seven-Dimension Evaluation**
>
> This keeps the benchmark inspectable and honest.
>
> It also avoids pretending that one fake-precise total score would capture everything.

</details>

<details>
<summary><strong>26. What does legality win rate mean?</strong></summary>

> It means:
>
> across a set of paired comparisons, how often does the inverse-governed answer win on legality against the baseline
>
> This is not:
>
> - style win rate
> - length win rate
> - confidence win rate
>
> It is:
>
> **winner on legality**
>
> So if a baseline sounds stronger but violates legality boundaries, the inverse answer can still win.

</details>

<details>
<summary><strong>27. What do the failure codes mean?</strong></summary>

> Failure codes summarize where an output violated the legality structure.
>
> At MVP stage, major codes include:
>
> - `PROBLEM_UNCONSTITUTED`
> - `WORLD_UNALIGNED`
> - `ROUTE_OPAQUE`
> - `PRIMARY_ROUTE_UNSTABLE`
> - `NEIGHBOR_NOT_SEPARATED`
> - `ILLEGAL_RESOLUTION_ESCALATION`
> - `COSMETIC_REPAIR_ONLY`
> - `PUBLIC_CEILING_EXCEEDED`
> - `FALSE_COMPLETION_RISK`
> - `DECORATIVE_PRECISION_RISK`
>
> These codes should be read operationally.
>
> They are not metaphysical truths.
> They are compact indicators of where legality broke.

</details>

<details>
<summary><strong>28. What are the seven evaluation dimensions?</strong></summary>

> The evaluator judges exactly these seven dimensions:
>
> 1. `problem_frame_legality`
> 2. `world_alignment_honesty`
> 3. `route_judgment_plausibility`
> 4. `neighboring_cut_honesty`
> 5. `resolution_legality`
> 6. `repair_legality`
> 7. `public_ceiling_compliance`
>
> Each one uses:
>
> - pass
> - borderline
> - fail
>
> The goal is not to reward performance theater.
>
> The goal is to inspect legality structure directly.

</details>

<details>
<summary><strong>29. What does the 60-second reproduction prove, and what does it not prove?</strong></summary>

> It proves something narrow but important:
>
> **the first contrast can be made visible quickly**
>
> It does not prove:
>
> - universal superiority
> - full benchmark completion
> - every-model-family validation
> - final production-scale victory
>
> Its job is much narrower:
>
> - compare one ordinary answer
> - compare one inverse-governed answer
> - inspect whether the governed version is more lawful under pressure
>
> So it is a first demonstration surface, not the final empirical story.

</details>

<details>
<summary><strong>30. What should Colab do?</strong></summary>

> Colab should make reproduction easier.
>
> The cleanest role for Colab is:
>
> - help users choose a version
> - run a quick baseline vs inverse comparison
> - reproduce a representative case
> - show legality deltas clearly
> - surface lightweight metrics and charts
>
> Colab should not replace clear documentation.
>
> It should act as a fast experimental dashboard.

</details>

---

## 5. Architecture Relationship 🧭

<details>
<summary><strong>31. Does Inverse Atlas replace Troubleshooting Atlas?</strong></summary>

> No.
>
> Inverse Atlas is designed to complement Troubleshooting Atlas, not replace it.
>
> The forward side is route-first and map-first.
>
> The inverse side is legitimacy-first and authorization-first.
>
> One gives the map.
>
> The other governs the right to speak from within the map.

</details>

<details>
<summary><strong>32. Why does the forward side only count as a weak prior?</strong></summary>

> Because route suggestion and lawful authorization are not the same act.
>
> A forward atlas can accelerate structural orientation.
>
> But it does not dominate the inverse layer.
>
> The inverse side keeps the right to:
>
> - downgrade
> - preserve ambiguity
> - remain coarse
> - reject repair finality
> - stop entirely
>
> This is one of the most important architectural laws of the whole system.

</details>

<details>
<summary><strong>33. What is Twin Atlas?</strong></summary>

> Twin Atlas is the paired architecture view.
>
> It means:
>
> - Troubleshooting Atlas is one wing
> - Inverse Atlas is the other wing
> - together they form the current family-level architecture of WFGY 4.0
>
> So Twin Atlas is not "yet another atlas."
>
> It is the family frame that explains why the two lines belong together.

</details>

<details>
<summary><strong>34. What is Bridge supposed to do?</strong></summary>

> Bridge is the internal handoff layer inside the broader twin-atlas direction.
>
> Its job is to help the system decide how route priors and legitimacy judgments should talk to each other.
>
> In short:
>
> - the forward side offers orientation
> - the inverse side governs authorization
> - Bridge handles handoff discipline between them
>
> The key rule remains:
>
> forward hints may inform the inverse layer as weak priors
>
> but they do not directly authorize public output

</details>

<details>
<summary><strong>35. Why does this architecture matter?</strong></summary>

> Because systems can fail in at least two different ways:
>
> 1. they route badly
> 2. they speak too strongly before lawful support exists
>
> Troubleshooting Atlas attacks the first failure.
>
> Inverse Atlas attacks the second.
>
> Together they create a stronger family:
>
> - better first diagnosis
> - fewer fake repairs
> - fewer premature conclusions
> - cleaner uncertainty handling
> - better distinction between route prior and authorized emission

</details>

---

## 6. Scope and Honesty 📏

<details>
<summary><strong>36. What artifacts already exist in the MVP?</strong></summary>

> At current MVP stage, the line already has a real artifact layer:
>
> - runtime prompts
> - product-facing versions
> - demo harness
> - evaluator
> - minimal case pack
> - experiments surface
> - paper
> - figures
>
> That is why Inverse Atlas is already more than a conceptual proposal.
>
> It already has a public operational object.

</details>

<details>
<summary><strong>37. What is already true today?</strong></summary>

> At the current stage, it is fair to say:
>
> - Inverse Atlas exists as a distinct atlas line
> - it already has runtime form, demo form, evaluator form, and case-pack form
> - it already has a public MVP artifact layer
> - it can already be inspected, compared, and criticized in public
> - it already pairs conceptually with Troubleshooting Atlas inside the broader twin-atlas direction
>
> That is already significant.

</details>

<details>
<summary><strong>38. What is not yet claimed?</strong></summary>

> Inverse Atlas does **not** currently claim:
>
> - full hallucination elimination
> - universal superiority across all tasks
> - every-model-family validation
> - a finished production operating system
> - a fully completed Bridge implementation
> - a fully completed WFGY 4.0 closed-loop system
>
> The current claim is narrower and stronger:
>
> **Inverse Atlas already exists as a real MVP artifact layer**
>
> **the broader architecture is still ahead**

</details>

<details>
<summary><strong>39. Can you show expected results without pretending they are already proven?</strong></summary>

> Yes.
>
> A good public structure separates:
>
> **Current findings**
>
> > What has already been seen in dry runs, MVP comparisons, or artifact-level testing.
>
> **Expected patterns**
>
> > What the framework is designed to show if reproduction is run properly.
>
> These two categories must not be mixed.
>
> That separation is part of the framework's honesty layer.

</details>

<details>
<summary><strong>40. Is this a framework, a product, or a benchmark?</strong></summary>

> Right now, it is all three at different layers.
>
> **As a framework**
>
> > It gives a new way to think about pre-generative legitimacy.
>
> **As a product line**
>
> > It already exists as a usable MVP artifact family.
>
> **As an evaluation seed**
>
> > It already has the beginning of a legality-centered benchmark surface.
>
> So the clean answer is:
>
> **it is a framework with a product-facing MVP and a benchmark seed**

</details>

<details>
<summary><strong>41. What is the single most important idea to remember?</strong></summary>

> This one:
>
> **The real question is no longer only whether a model can answer.**
>
> **It is whether the model has earned the right to answer at the requested level of resolution.**
>
> That is the central shift of the whole Inverse Atlas line.

</details>

---

## Recommended Reading Order

If you are new, use this order:

1. read the [README](./README.md)
2. read this FAQ page
3. start with [Inverse Atlas Advanced](./runtime/inverse-advanced.txt)
4. try the [Demo Harness](./runtime/inverse-demo.txt)
5. test one case from the [Case Pack](./runtime/inverse-cases.txt)
6. score it with the [Evaluator](./runtime/inverse-eval.txt)
7. then continue to:
   - [Quick Start](./quickstart.md)
   - [Runtime Guide](./runtime-guide.md)
   - [Experiments Hub](./experiments/README.md)
   - [Status and Boundaries](./status-and-boundaries.md)
   - [Twin Atlas](../Twin_Atlas/README.md)

---

## Final Note

Inverse Atlas exists because route-first troubleshooting turned out to be useful enough to reveal the next missing layer.

Once you can map the likely failure region better, the next question becomes unavoidable:

**what gives the system the right to speak strongly from within that map**

That is the problem Inverse Atlas is trying to solve.

And that is why it is not just a side feature.

It is the legitimacy-first half of a much larger architecture.
