---
description: |
    The namespace / package / module path all code in this scope must be emitted
    under. The agent uses it as the qualified name and import root.
    Example:
        # namespace billing
        All code here belongs to `@acme/billing`. Import shared types from its
        root, not via relative deep paths.
---

<reusable_namespace_context name="{name}" id="{id}">

{body}

{children}

</reusable_namespace_context>
