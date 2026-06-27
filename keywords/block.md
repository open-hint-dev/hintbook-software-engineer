---
description: |
    A named, reusable UI component or layout section (card, panel, sidebar,
    widget). Implement its declared structure and children exactly; add no
    undeclared controls and omit none. Nest under a `ui` surface, or give it an
    id and reuse it across surfaces.
    Example:
        # block InvoiceCard
        Shows the customer, amount, and a status badge. No actions inside the
        card.
---

<user_interface_block name="{name}" id="{id}">

{body}

{children}

</user_interface_block>
