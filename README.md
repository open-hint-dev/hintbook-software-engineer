# @openhint/hintbook-software-engineer

The official general-purpose [hintbook](https://github.com/open-hint-dev/hint/blob/main/docs/05-hintbooks.md) for [HINT](https://github.com/open-hint-dev/hint#readme) — the keyword vocabulary that turns `.hint` specifications into binding implementation prompts for AI coding agents.

A hintbook supplies what the HINT transpiler deliberately leaves open: the meaning of every keyword. This book covers the day-to-day vocabulary of software engineering — data structures, function contracts, logic flows, UI surfaces, dependency policies, prohibitions, and test criteria — and ships three compilation modes: **implement**, **fix**, and **review**.

## Installation

```bash
hint install @openhint/hintbook-software-engineer
```

This registers the book in your project's `hint.yml`:

```yaml
books:
    - npm://@openhint/hintbook-software-engineer
```

Then let `hint config | claude -p` add the book's system glossary to your `AGENTS.md` / `CLAUDE.md`, so agents know how to read the compiled tags.

## Vocabulary at a glance

Write any of these as a markdown heading — `# keyword Name {#optional_id}` — at any nesting level:

| Area            | Keywords                                                                   |
| --------------- | -------------------------------------------------------------------------- |
| Intent & scope  | `goal`, `done`, `scope`                                                    |
| Project context | `app`, `lang`, `build`, `dep`, `module`, `lib`, `namespace`, `res`, `read` |
| Data            | `data`, `entity`, `field`, `table`, `column`, `row`                        |
| Behavior        | `func`, `arg`, `result`, `flow`, `action`, `error`                         |
| Constraints     | `rule`, `decision`, `invariant`, `good`, `bad`, `test`, `example`          |
| User interface  | `ui`, `form`, `block`, `image`                                             |
| Spec-internal   | `notes` (excluded from compiled output)                                    |

Common long forms work as synonyms: `application` → `app`, `function` → `func`, `dependencies` → `dep`, `language` → `lang`, `library` → `lib`, `argument` → `arg`, `return` → `result`, `intent` → `goal`, `acceptance` → `done`, `outofscope` → `scope`, `constant` → `data`, and more.

See the full reference with rendered tags and usage guidance in [docs/keywords.md](docs/keywords.md).

## Output

| Invocation                  | What you get                                                                                                                  |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| `hint <paths>`              | The knowledge that applies, rendered through this book's tags. No persona, no footer — what an agent already mid-session needs. |
| `hint --prompt <paths>`     | The same knowledge wrapped in the role header and verification/report footer, for an agent starting cold.                       |
| `hint --standalone <paths>` | Implies `--prompt`, and prepends the tag glossary for an agent that never loaded `AGENTS.md`.                                   |

When a `hint.lock` exists and blocks have drifted, `--prompt` output additionally carries the drift list and scopes the work to it — automatically, with no mode to select. Details in [docs/framing.md](docs/framing.md).

> Requires `@openhint/cli` 1.1+. This book no longer ships `--mode fix` / `--mode review`; see the [migration guide](https://github.com/open-hint-dev/hint/blob/main/docs/07-migration.md).

## Emit: producing the code

This hintbook also ships **emit packs** — `emit/typescript/` and `emit/go/` — so `hint emit` can produce the declarations a spec describes, deterministically and without a model:

```bash
hint emit src/billing/invoice.ts    # write it
hint emit --check                   # CI: the artifact still matches its spec
```

| Keyword | TypeScript | Go |
| --- | --- | --- |
| `entity` + `field` | `export interface` | `type … struct` |
| `func` + `arg` + `result` | `export function` with a hole for the body | `func` returning `(T, error)` with a hole |

A type is always optional. `## arg invoice` is a spec a person wrote, and the template — not you — decides how to cope: TypeScript drops the annotation, Go falls back to `any`. Writing `## arg invoice: Invoice` when you know the type simply gives the emitter more to work with.

Everything else has no template and therefore produces no code: `decision`, `invariant`, `rule`, `bad`, `good`, `flow`, `error`, `test`, `lang`, `dep`, `build`. Those are not declarations — they are what the implementation must honour, so they reach the implementer as constraints inside the hole rather than as syntax. A `flow` nested under a `func` becomes that function's step list, right where the body has to be written.

## Example

```markdown
# entity PaymentData {#payment_data}

this entity describes the payment data contract

## field timestamp

unix epoch milliseconds
```

compiles (inside the file/folder context chain, header, and footer) into:

```markdown
<data_structure name="PaymentData" id="payment_data">

this entity describes the payment data contract

<field name="timestamp" id="">

unix epoch milliseconds

</field>

</data_structure>
```

The `__system__` glossary defines `data_structure`, `field`, and every other tag as a binding directive — that pairing of rendered tags and glossary is what makes the output enforceable rather than decorative.

## License

MIT
