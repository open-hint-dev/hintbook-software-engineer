---
description: |
    A static data asset: its structure and access patterns. Use to point the
    agent at a resource (config file, fixture, seed data, lookup table) it must
    read or honor rather than invent.
    Example:
        # res Country codes
        `data/countries.json` — array of `{ code, name }`. Look up by `code`;
        never hardcode country names inline.
synonyms:
    - resource
    - resources
---

<static_asset name="{name}" id="{id}">

{body}

{children}

</static_asset>
