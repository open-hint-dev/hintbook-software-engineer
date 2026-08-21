---
description: |
    A UI surface built exactly as specified — only the declared elements, and all
    of them. Nest `block`, `form`, `image`, or `table` under it for its parts.
    Example:
        # ui Invoice page
        A header with the title, an invoices table, and a "New invoice" button.
        No other controls.
synonyms: [uis, ui-item]
---

<user_interface_surface name="{name}" id="{id}" {attrs} source="{source}">

{body}

{children}

</user_interface_surface>
