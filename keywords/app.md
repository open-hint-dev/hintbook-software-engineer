---
description: |
    The domain, purpose, and overall structure of the application. Informs
    naming, architecture, and behavioral decisions everywhere — usually declared
    once near the top of a spec.
    Describe what the app is and how it is organized, plus cross-cutting facts
    (units, conventions); keep file-level detail for the blocks that own it.
    Example:
        # app Billing service
        A Stripe-backed billing service for a B2B SaaS. Money is integer cents;
        all timestamps are UTC.
synonyms:
    - application
---

<application_context name="{name}" id="{id}">

{body}

{children}

</application_context>
