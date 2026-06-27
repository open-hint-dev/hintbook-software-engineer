---
description: |
    A data model with an exact schema — no renamed fields, changed types, or
    extra/missing fields. The authoritative blueprint for the structure across
    the codebase.
    Nest one `field` block per property under it rather than listing fields in
    prose; give the entity an id so other blocks can reference it.
    Example:
        # entity PaymentData {#payment_data}
        The payment contract sent to the gateway.
        ## field amountCents
        integer, required, must be > 0
---

<data_structure name="{name}" id="{id}">

{body}

{children}

</data_structure>
