---
description: |
    A reusable module already in the codebase: its responsibilities, exports,
    and consumers. The agent must reuse it instead of duplicating its logic.
    Describe what the module owns and what it exports so the agent calls it
    rather than reimplementing it. Give it an id if other blocks reference it.
    Example:
        # module auth {#auth}
        Owns session creation and verification. Exports `createSession`,
        `verifyToken`. Never hand-roll token logic elsewhere.
---

<reusable_module_context name="{name}" id="{id}">

{body}

{children}

</reusable_module_context>
