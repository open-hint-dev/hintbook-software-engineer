---
description: |
    A form: every field, label, validation rule, and submission behavior as
    described. Nest a `field` block per input; add no undeclared fields and omit
    none.
    Example:
        # form Login
        Submits to `/session`.
        ## field email
        required, email format
        ## field password
        required, min 8 chars
synonyms: [forms, form-item]
---

<user_interface_form name="{name}" id="{id}" {attrs} source="{source}">

{body}

{children}

</user_interface_form>
