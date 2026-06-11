# Modes

A mode selects the role wrapper around the compiled specification — who the agent is and what "done" means. The keyword templates are shared across modes; what changes is the `__header__` that opens the prompt and the `__footer__` that closes it.

Select a mode with the CLI:

```bash
hint <paths>                  # compile (default)
hint --mode fix <paths>
hint --mode review <paths>
```

Any instruction missing from a mode falls back to the default mode, so each mode only defines what differs.

---

## `compile` — implement (default)

The agent is a **senior software engineer implementing a project from a binding specification**.

- Read the entire specification before writing code; implement in dependency order.
- Implement exactly what is specified; fill silence with codebase conventions, never invented features.
- Reuse declared modules and libraries instead of duplicating them.
- Production-quality output only — no placeholders, stubs, or TODOs.
- Conflicts between blocks: the more specific block wins, and the conflict must be reported.

The footer is a completion checklist: every block implemented, no prohibited patterns, exact names and types, build and tests passing — followed by a summary that maps the code back to the specification blocks it satisfies.

## `fix` — repair

The agent is a **senior software engineer fixing defects in an existing implementation**, anchored on one principle: _where the code and the specification disagree, the code is wrong_.

- Diagnose first: reproduce the defect, find the root cause, identify the violated specification block.
- Make the smallest change that restores conformance — no drive-by refactoring.
- Preserve behavior that already conforms.
- If the specification itself turns out to be the defect, stop and report the contradiction.

The footer demands a regression test that fails without the fix, and a report of root cause → violated block → exact change → verification.

## `review` — audit

The agent is a **senior software engineer reviewing an implementation against its binding specification** — it produces findings, never patches.

- Walk the specification block by block and check every declaration against the code.
- Hunt declared anti-patterns explicitly; judge by the spec, not personal taste.
- Confirm every finding in the actual source before reporting it.

The footer defines the report format: findings ordered by severity (`violation` / `gap` / `risk`) with file ranges, the related specification block, and the minimal correcting change — closed by an explicit conforms / does-not-conform verdict.

---

## Running keywords

Beyond headers and footers, the book defines the structural templates used in every mode:

| Instruction  | Renders                                                                                                                                                         |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `__file__`   | `<file_context path="...">` around each companion hint file — `path` is the target file (e.g. `src/login.ts`).                                                  |
| `__folder__` | `<folder_context path="...">` around each folder hint — `path` is the folder (`.` for the project root). Folder context visibly encloses everything beneath it. |
| `__system__` | The tag glossary. Not part of compiled prompts — `hint config` emits it for `AGENTS.md` / `CLAUDE.md`, teaching agents that every tag is a binding directive.   |

## Adding a mode

Create `__header__.<mode>.md` and `__footer__.<mode>.md` in `keywords/` — the file-name suffix is the mode name. Override individual keywords per mode the same way (`entity.review.md`) when a mode needs different rendering; otherwise the default-mode templates apply.
