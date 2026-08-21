---
description: |
    A settled architectural or design decision, and the reason behind it. Records why
    this subsystem is the way it is, so future work extends the decision instead of
    relitigating or quietly contradicting it. State the decision, then the rationale —
    the rationale is what tells a reader whether a new situation is still covered.
    Example:
        # decision Gateway owns external authentication {#auth_boundary}
        All external auth terminates at the gateway; downstream services trust its
        signed context header and never re-authenticate. Rationale: one place to
        rotate keys and audit access. Consequence: a service that needs identity
        reads the header, it does not call the identity database.
synonyms:
    - adr
---

<architectural_decision name="{name}" id="{id}" {attrs} source="{source}">

{body}

{children}

</architectural_decision>
