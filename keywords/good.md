---
description: |
    Required patterns and practices, applied in all generated code without
    exception or substitution — even an equivalent-seeming alternative is not
    allowed. Use for the positive "always do it this way" standards.
    Example:
        # good Error handling
        Wrap every external call in a typed Result; never throw across module
        boundaries.
---

<enforced_patterns name="{name}" id="{id}">

{body}

{children}

</enforced_patterns>
