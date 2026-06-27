---
description: |
    What is in scope and what is explicitly out of scope. The agent builds
    everything in scope and nothing out of it — and reports rather than silently
    expanding the boundary.
    List in-scope and out-of-scope items explicitly; the out-of-scope list is as
    important as the in-scope one for stopping the agent over-building.
    Example:
        # scope This change
        In scope: the payment retry guard.
        Out of scope: refactoring the cart model, adding new payment providers.
synonyms:
    - nongoal
    - nongoals
    - outofscope
---

<scope_boundary name="{name}" id="{id}">

{body}

{children}

</scope_boundary>
