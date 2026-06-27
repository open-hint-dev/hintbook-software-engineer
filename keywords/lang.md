---
description: |
    The language and runtime target. The agent must use only syntax, APIs, and
    idioms belonging to it — no features from other versions or runtimes.
    State language, version, runtime, and module system precisely.
    Example:
        # lang TypeScript
        TypeScript 5.x on Node 20, ESM modules, strict mode. No CommonJS
        `require`, no experimental syntax.
synonyms:
    - language
---

<environment_runtime_and_language name="{name}" id="{id}">

{body}

{children}

</environment_runtime_and_language>
