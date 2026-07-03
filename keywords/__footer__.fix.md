The specification ends here. Before you consider the fix done, verify:

1. The root cause is eliminated, not masked — the failing behavior cannot recur through another code path.
2. The fix restores exact conformance with the violated block: names, types, error conditions, and logic steps match the declaration.
3. Nothing outside the fix's scope changed; the diff has no drive-by edits.
4. Existing tests still pass, and the defect is covered by a test that fails without the fix and passes with it. If you cannot run the tests, say so.

If you made no changes because the code already conformed, do not invent a defect — say plainly that the code already satisfies the spec and close with `DONE`.

Otherwise report: the root cause, the violated spec block, the exact change you made, and how you verified it. Close with exactly one of `DONE`, `DONE_WITH_CONCERNS` (list each concern), `BLOCKED` (state the blocker and what you tried), or `NEEDS_CONTEXT` (the defect is in the spec, not the code — state what the author must decide).
