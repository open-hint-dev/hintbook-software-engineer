---
description: |
    Unconditional prohibitions — real past failures the agent must never
    reintroduce, even if an example seems to suggest them. This block carries the
    strongest enforcement language in the book; prefer it over prose for any
    "do not" / "must not."
    Example:
        # bad Never do
        - Do not store secrets in source.
        - Do not catch and swallow errors silently.
---

<prohibited_anti_patterns name="{name}" id="{id}">

CRITICAL ASSURANCE: You are strictly prohibited from implementing the following behaviors under any circumstances. These prohibitions exist because of real vulnerabilities and failures in this codebase — do not reintroduce them:

{body}

{children}

</prohibited_anti_patterns>
