---
description: |
    A tabular data structure or UI table: its columns, row shape, and
    persistence/display behavior. Nest `column` (and optionally `row`) blocks
    under it; do not alter column order or add undeclared behavior.
    Example:
        # table Invoices
        Sortable by date, paginated 25 per page.
        ## column amount
        integer cents, right-aligned, formatted as currency
---

<table name="{name}" id="{id}">

{body}

{children}

</table>
