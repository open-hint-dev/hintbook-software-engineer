# Keyword Reference

Every keyword in this hintbook, the tag it compiles into, and how to use it. Write keywords as markdown headings — `# keyword Name {#optional_id}` — at any nesting level; heading depth nests blocks into their parents.

All templates render the block's name and id as attributes and place the body before the compiled children, so nested declarations stay visibly inside their parent's scope.

---

## Project context

| Keyword | Synonyms | Compiles to | Use it for |
| --- | --- | --- | --- |
| `app` | `application` | `<application_context>` | The domain, purpose, and overall structure of the application. Informs naming, architecture, and behavioral decisions everywhere. |
| `lang` | `language` | `<environment_runtime_and_language>` | The language and runtime target. The agent must use only syntax, APIs, and idioms belonging to it. |
| `build` | | `<compilation_and_testing_pipeline>` | Build and test commands. Generated code must never break these pipelines. |
| `dep` | `deps`, `dependency`, `dependencies` | `<approved_dependency_whitelist>` | The approved dependency list. The agent is forbidden from installing or importing anything outside it without asking. |
| `module` | | `<reusable_module_context>` | A reusable module in the codebase: responsibilities, exports, consumers. The agent must reuse it, not duplicate it. |
| `lib` | `library` | `<reusable_library_context>` | A shared library (internal or external): API surface, version constraints, usage patterns. |
| `namespace` | | `<reusable_namespace_context>` | The namespace/package/module path all code in scope must be emitted under. |
| `res` | `resource`, `resources` | `<static_asset>` | A data asset definition — structure and access patterns. |
| `read` | | `<read_it>` | Files the agent must open and read before writing code that touches them — mirroring their formatting, exports, and error handling. |

## Data

| Keyword | Synonyms | Compiles to | Use it for |
| --- | --- | --- | --- |
| `entity` | | `<data_structure>` | A data model with an exact schema. No renamed fields, changed types, extra or missing fields. |
| `field` | | `<field>` | One named property of an entity or form: type, optionality, validation. Implement exactly as declared. |
| `table` | | `<table>` | A tabular structure or UI table: columns, row shape, persistence/display behavior. |
| `column` | | `<table_column>` | One column: name, type, label, constraints. |
| `row` | | `<table_row>` | The shape and content of a single row. |

## Behavior

| Keyword | Synonyms | Compiles to | Use it for |
| --- | --- | --- | --- |
| `func` | `function` | `<function_contract>` | A binding function contract: arguments, return, errors, and logic flow are all mandatory. |
| `arg` | `argument` | `<argument>` | One input: name, type, constraints, defaults — honored exactly. |
| `result` | `return` | `<return>` | The output: declared type and shape exactly, on every code path. |
| `flow` | | `<logic_flow>` | A step-by-step logical sequence the implementation must follow without skipping validations. |
| `action` | | `<reusable_automation_script>` | A macro behavior: when the described condition is met (or the action is referenced by name), execute its steps exactly. |
| `error` | | `<error>` | Exact error types under exact conditions — never substituted, wrapped, or renamed; each one backed by a regression test. |

## Constraints

| Keyword | Synonyms | Compiles to | Use it for |
| --- | --- | --- | --- |
| `rule` | `rules` | `<critical_system_mandates>` | Non-negotiable system-level constraints every function, data access, and error path must satisfy. |
| `good` | | `<enforced_patterns>` | Required patterns and practices, applied without exception or substitution. |
| `bad` | | `<prohibited_anti_patterns>` | Unconditional prohibitions — real past failures the agent must never reintroduce, even if examples seem to suggest them. |
| `test` | | `<verification_and_unit_test_criteria>` | Test scenarios that must all appear in the test output: edge cases, mock shapes, assertions. |
| `example` | | `<few_shot_example>` | A demonstration of the required pattern — structure, naming, and style to replicate exactly. |

## User interface

| Keyword | Synonyms | Compiles to | Use it for |
| --- | --- | --- | --- |
| `ui` | | `<user_interface_surface>` | A UI surface built exactly as specified — only the declared elements, all of the declared elements. |
| `form` | | `<user_interface_form>` | A form: every field, label, validation rule, and submission behavior as described. |
| `block` | | `<user_interface_block>` | A named reusable component or layout section (card, panel, sidebar). |
| `image` | | `<user_interface_image>` | An image element: exact source, alt text, dimensions, display properties. |

## Spec-internal

| Keyword | Synonyms | Compiles to | Use it for |
| --- | --- | --- | --- |
| `notes` | | *(nothing — excluded)* | Author-facing notes that must never reach the compiled prompt. The block and everything nested under it are dropped. |

---

## Choosing keywords

- **Reach for the most specific keyword.** `field` inside an `entity` beats a bullet list in the entity body — the agent gets a named, binding block it cannot gloss over.
- **Give ids to anything referenced elsewhere.** `# entity PaymentData {#payment_data}` keeps a stable handle through renames.
- **State prohibitions with `bad`, not prose.** Its template adds the strongest enforcement language in the book.
- **Unknown keywords don't fail** — the transpiler passes their bodies through as plain markdown — but only declared keywords carry the binding tag language defined in the system glossary.
