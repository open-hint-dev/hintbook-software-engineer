---
description: |
    The shape and content of a single table row. Nest under a `table`. Use when a
    specific row's fields and values must be exact — e.g. a seed row, a totals
    row, or an example row. Add no undeclared fields, omit none listed.
    Example:
        ## row Totals
        Sums each numeric column; non-numeric cells left blank.
---

<table_row name="{name}" id="{id}">

{body}

{children}

</table_row>
