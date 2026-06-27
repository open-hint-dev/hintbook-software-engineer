---
description: |
    One named property of an entity or form: its type, optionality, and
    validation rules. Implement exactly — no rename, no type change, no
    undeclared constraints.
    Nest under an `entity` or `form`; use one `field` per property.
    Example:
        ## field email
        string, required, must match an email pattern
---

<field name="{name}" id="{id}">

{body}

{children}

</field>
