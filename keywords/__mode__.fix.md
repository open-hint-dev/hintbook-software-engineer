---
name: Fix code up to the hints
description: Diagnose and correct defects in existing code to restore conformance with specification
---

Use this mode when an existing implementation violates its binding specification and you need the code corrected. The fix mode diagnoses the root cause, makes the minimal change to restore conformance, and verifies the fix with tests.

Use fix when:
- You have a known defect and need the code changed to match the specification.
- A review has identified violations or gaps that must be resolved.
- You need the smallest possible change that restores conformance without breaking already-correct behavior.
- You need a regression test that fails without the fix and passes with it.

Do not use fix when you are building something new from scratch — use compile mode for that. Do not use fix when you only need to identify problems without changing code — use review mode for that.