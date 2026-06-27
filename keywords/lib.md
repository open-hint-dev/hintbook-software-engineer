---
description: |
    A shared library (internal or external): its API surface, version
    constraints, and usage patterns. The agent must understand it before use and
    must not reimplement what it already provides.
    Example:
        # lib stripe-node
        Use the official `stripe` SDK v14. Create charges via
        `stripe.paymentIntents.create`. Do not call the REST API directly.
synonyms:
    - library
---

<reusable_library_context name="{name}" id="{id}">

{body}

{children}

</reusable_library_context>
