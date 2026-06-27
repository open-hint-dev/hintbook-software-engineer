---
description: |
    The build and test commands the generated code must never break. Give the
    exact commands the agent is expected to keep green.
    Example:
        # build Pipeline
        `npm run build` compiles, `npm test` runs Vitest. Both must pass before
        the work is considered done.
---

<compilation_and_testing_pipeline name="{name}" id="{id}">

{body}

{children}

</compilation_and_testing_pipeline>
