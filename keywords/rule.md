---
description: |
    Non-negotiable system-level constraints every function, data access, and
    error path must satisfy. Use for cross-cutting mandates, not the detail of a
    single function.
    Example:
        # rule Money
        All monetary values are integer cents — never floats. Every write to the
        ledger happens inside a transaction.
synonyms:
    - rules
---

<critical_system_mandates name="{name}" id="{id}">

{body}

{children}

</critical_system_mandates>
