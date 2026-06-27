---
description: |
    The function's output: its declared type and shape, identical on every code
    path — no extra fields, no different type under any branch. Nest under a
    `func`.
    Example:
        ## result
        `{ id: string, status: "ok" | "failed" }` on every path
synonyms:
    - return
---

<return name="{name}" id="{id}">

{body}

{children}

</return>
