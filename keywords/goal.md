---
description: |
    Why the work exists and the outcome it must produce. Lead a spec with this:
    it is the tie-breaker for every decision the spec leaves unstated — when a
    block is silent, the agent picks whatever best serves the goal.
    Write the desired outcome and its motivation, not features to build; it is
    context for judgment, so no code is emitted for the goal itself.
    Example:
        # goal Checkout must never double-charge
        A retry or double-click must never create two payments for one cart.
        Correctness of the charge outweighs latency.
synonyms:
    - why
    - intent
---

<product_goal_and_intent name="{name}" id="{id}">

{body}

{children}

</product_goal_and_intent>
