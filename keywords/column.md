---
surface: true
description: |
    One column of a table: name, data type, display label, and constraints
    (nullable, unique, default). Nest under a `table`. Implement exactly — no
    rename, type change, or undeclared constraint.
    Example:
        ## column status
        enum: draft | sent | paid. Default draft. Label "Status".
synonyms: [columns, column-item]
---

<table_column name="{name}" id="{id}" {attrs} source="{source}">

{body}

{children}

</table_column>
