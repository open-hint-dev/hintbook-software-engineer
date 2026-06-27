---
description: |
    The observable, verifiable conditions that define "done." The work is
    incomplete until every criterion is demonstrably met — proven with a test,
    a command, or a concrete observation, never merely asserted.
    Write each criterion as something checkable; prefer measurable outcomes over
    vague quality words like "fast" or "clean."
    Example:
        # done Acceptance
        - `npm test` passes with a new test covering the retry case
        - Submitting the same cart twice creates exactly one payment row
synonyms:
    - accept
    - acceptance
    - criteria
---

<acceptance_criteria name="{name}" id="{id}">

{body}

{children}

</acceptance_criteria>
