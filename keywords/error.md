---
description: |
    Exact error types thrown under exact conditions — never substituted, wrapped,
    or renamed. Each one must be backed by a regression test that fails without
    the guard and passes with it.
    State the condition and the error to throw; often nested under a `func`.
    Example:
        ## error
        Throw `InvalidAmountError` when amount <= 0.
        Throw `DuplicateChargeError` when the idempotency key already exists.
---

<error name="{name}" id="{id}">

{body}

{children}

</error>
