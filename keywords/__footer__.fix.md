The specification ends here.

Before you consider the fix done, verify all of the following:

1. The root cause is eliminated, not masked — the failing behavior cannot recur through another code path.
2. The fix restores exact conformance with the violated specification block: names, types, error conditions, and logic steps match the declaration.
3. Nothing outside the scope of the fix changed; the diff contains no drive-by edits.
4. Existing tests still pass, and the defect is covered by a test that fails without the fix and passes with it. If you cannot run the tests, say so explicitly.

If you made no changes because the code already conformed, do not invent a defect — say plainly that the code already satisfies the specification and close with `DONE`.

Otherwise report: the root cause, the specification block that was violated, the exact change you made, and how you verified it. Close with a status — exactly one of `DONE`, `DONE_WITH_CONCERNS` (list each concern), `BLOCKED` (state the blocker and what you tried), or `NEEDS_CONTEXT` (the defect is in the spec, not the code — state what decision the author must make).
