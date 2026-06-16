The specification ends here.

Before you consider the work done, verify all of the following:

1. Every declared structure, function, flow, and surface above is implemented — walk the blocks one by one and confirm each is satisfied.
2. Every declared acceptance criterion is demonstrably met, and nothing declared out of scope was built.
3. No prohibited pattern appears anywhere in your output, including code adapted from examples.
4. Names, types, field sets, and signatures match their declarations exactly — no renames, no extra fields, no approximations.
5. The project builds and the declared test criteria pass; if you cannot run them, say so explicitly rather than implying success.

Then report, in this order:

- **What you built** — map each major piece of code back to the specification block it satisfies.
- **Gaps** — every place the specification was silent and you had to make a decision, and the choice you made, so the author can correct it instead of discovering it later.
- **Status** — exactly one of: `DONE` (every block satisfied; builds and declared tests pass), `DONE_WITH_CONCERNS` (complete, but list each concern), `BLOCKED` (could not proceed — state the blocker and what you tried), or `NEEDS_CONTEXT` (a decision is the author's to make — state exactly what you need).
