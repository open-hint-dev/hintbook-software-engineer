The specification ends here. Before you consider the work done, verify:

1. Every declared structure, function, flow, and surface is implemented — walk the blocks one by one.
2. Every acceptance criterion is demonstrably met, and nothing declared out of scope was built.
3. No prohibited pattern appears anywhere in your output, including code adapted from examples.
4. Names, types, field sets, and signatures match their declarations exactly — no renames, extra fields, or approximations.
5. The project builds and the declared tests pass; if you cannot run them, say so rather than imply success.

Then report, in order:

- **What you built** — map each major piece of code back to the spec block it satisfies.
- **Gaps** — every place the spec was silent and you had to decide, and the choice you made, so the author can correct it.
- **Status** — exactly one of: `DONE` (every block satisfied; builds and declared tests pass), `DONE_WITH_CONCERNS` (complete, but list each concern), `BLOCKED` (could not proceed — state the blocker and what you tried), or `NEEDS_CONTEXT` (a decision is the author's — state exactly what you need).
