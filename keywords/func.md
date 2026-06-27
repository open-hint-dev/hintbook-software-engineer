---
description: |
    A binding function contract. Every argument, the return, each error, and the
    logic flow are mandatory — nest `arg`, `result`, `flow`, and `error` blocks
    under it instead of describing them in prose.
    Give it an id when other blocks reference it.
    Example:
        # func chargeCart {#charge_cart}
        Charges a cart exactly once.
        ## arg cartId
        string, required
        ## result
        PaymentResult
        ## flow
        1. validate cart  2. check idempotency key  3. create payment
synonyms:
    - function
---

<function_contract name="{name}" id="{id}">

{body}

{children}

</function_contract>
