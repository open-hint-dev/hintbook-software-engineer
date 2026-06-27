---
description: |
    One column of a table: name, data type, display label, and constraints
    (nullable, unique, default). Nest under a `table`. Implement exactly — no
    rename, type change, or undeclared constraint.
    Example:
        ## column status
        enum: draft | sent | paid. Default draft. Label "Status".
---

<table_column name="{name}" id="{id}">

{body}

{children}

</table_column>
