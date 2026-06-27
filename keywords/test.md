---
description: |
    Test scenarios that must all appear in the test output: edge cases, mock
    shapes, and assertions. The agent must cover every one listed.
    Enumerate the scenarios explicitly rather than saying "add tests."
    Example:
        # test Charge
        - charges a valid cart once
        - rejects amount <= 0 with InvalidAmountError
        - a second charge with the same key returns the first payment
---

<verification_and_unit_test_criteria name="{name}" id="{id}">

{body}

{children}

</verification_and_unit_test_criteria>
