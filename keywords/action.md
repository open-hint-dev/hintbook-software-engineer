---
description: |
    A macro behavior: when its described condition is met, or it is referenced by
    name from another block, the agent executes its steps exactly. Use for a
    repeated procedure you want to define once and invoke by name.
    Give it an id and reference it from the blocks that trigger it.
    Example:
        # action audit-log {#audit_log}
        Whenever money changes hands, append `{ actor, amount, ts }` to the
        audit table.
---

<reusable_automation_script name="{name}" id="{id}">

{body}

{children}

</reusable_automation_script>
