---
description: |
    Injected automatically in fix mode when a hint.lock exists: the block-level drift
    report listing which specification blocks changed since the code was last generated.
    You never write this block yourself — the compiler renders it from the lock.
---

<specification_drift>

The blocks listed below changed since this code was last generated against the lock. This is the scope of your fix: reconcile the code with these blocks, and treat every other block in the specification as already satisfied.

{body}

Rules for this scope:

- Change only the code governed by a listed block. Do not touch, refactor, or restyle code governed by blocks that are not listed — they already conform.
- A block marked `inherited` means the file's own spec is unchanged but its folder or root context shifted; re-verify the whole file against that context.
- A block marked `new` has no prior code; implement it in full.
- If restoring a listed block genuinely forces a change to code governed by an unlisted block, make it — but call it out in your report rather than widening the diff silently.

</specification_drift>
