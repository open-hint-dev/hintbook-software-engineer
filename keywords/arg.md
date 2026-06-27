---
description: |
    One function input: its name, type, constraints, and default. Honored
    exactly — no rename, reorder, or type change. Nest under a `func`, one `arg`
    per parameter.
    Example:
        ## arg retries
        integer, optional, default 3, must be >= 0
synonyms:
    - argument
---

<argument name="{name}" id="{id}">

{body}

{children}

</argument>
