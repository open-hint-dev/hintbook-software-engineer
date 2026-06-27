---
description: |
    A demonstration of the required pattern — structure, naming, and style to
    replicate exactly. Use it to show the shape you want when prose would be
    ambiguous. Put the exemplar (often a code block) in the body.
    Example:
        # example Handler shape
        Replicate this structure for every route handler:
        export const handler = (req: Req): Result<Res> => { ... }
---

<few_shot_example name="{name}" id="{id}">

{body}

{children}

</few_shot_example>
