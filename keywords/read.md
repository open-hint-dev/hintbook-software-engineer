---
description: |
    Files the agent must open and read before writing code that touches them — so
    it mirrors their formatting, exports, and error handling instead of guessing.
    Put the file path(s) in the name/body. Reach for this whenever new code must
    match an existing file's conventions or call into it.
    Example:
        # read src/payment/charge.ts
        Read this before editing charge logic; match its error-handling and
        logging style exactly.
---

<read_it name="{name}" id="{id}">

{body}

{children}

</read_it>
