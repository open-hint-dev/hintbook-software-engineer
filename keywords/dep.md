---
description: |
    The approved dependency list for this scope. The agent must not install or
    import anything outside it without asking first.
    List the allowed packages (and versions where they matter). Anything not
    listed is forbidden by default — that is the point of the block.
    Example:
        # dep Allowed
        - zod
        - date-fns
        No other runtime dependencies without approval.
synonyms:
    - deps
    - dependency
    - dependencies
---

<approved_dependency_whitelist name="{name}" id="{id}">

{body}

{children}

</approved_dependency_whitelist>
