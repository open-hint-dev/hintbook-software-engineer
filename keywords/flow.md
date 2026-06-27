---
description: |
    A step-by-step logical sequence the implementation must follow without
    skipping any validation. Usually nested under a `func`; write the steps as an
    ordered list in execution order.
    Example:
        ## flow
        1. Reject if amount <= 0
        2. Look up idempotency key; return the existing payment if found
        3. Create the payment and persist the key
---

<logic_flow name="{name}" id="{id}">

{body}

{children}

</logic_flow>
