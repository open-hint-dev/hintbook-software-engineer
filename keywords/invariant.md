---
description: |
    A property of this scope that must hold at all times — before and after every
    change. Unlike a `rule` (which governs how you work) an invariant is a statement
    about the system that code may not falsify. If a change would break it, the change
    is wrong, not the invariant.
    Example:
        # invariant Token verification goes through TokenVerifier {#token_path}
        Every code path that accepts a bearer token calls TokenVerifier.verify.
        No handler parses or trusts a token itself, including in tests.
---

<system_invariant name="{name}" id="{id}">

{body}

{children}

</system_invariant>
