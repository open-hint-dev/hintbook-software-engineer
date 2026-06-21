---
name: Review code up to the hints
description: Audit existing code against specification and produce findings without modifying code
---

Use this mode when you need to audit an existing implementation against its binding specification without modifying any code. The review mode produces a list of findings — violations, gaps, and risks — ordered by severity, along with a final conforms / does-not-conform verdict.

Use review when:
- You want to verify that code matches the specification before merging or deploying.
- You need a structured audit that references specific specification blocks and file locations.
- You want to identify anti-patterns, missing declarations, or fragile code that violates declared constraints.
- You are preparing for code review and need a detailed pre-check report.

Do not use review when you need the code changed — use fix mode for that.