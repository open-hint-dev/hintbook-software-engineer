---
description: |
    A meaningful concrete value — a named constant, magic value, enum member, or
    config default. Used exactly as given, and referenced rather than duplicated
    as a literal wherever it is needed.
    Give the name and the exact value. Reach for this instead of letting a magic
    number or string appear inline; give it an id so other blocks can cite it.
    Example:
        # data MAX_RETRIES {#max_retries}
        Value: 3. The retry guard must use this constant, not a literal 3.
synonyms:
    - const
    - constant
    - value
    - var
    - variable
---

<data_definition name="{name}" id="{id}">

{body}

{children}

</data_definition>
