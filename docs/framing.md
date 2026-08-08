# Prompt framing

By default `hint <paths>` returns the knowledge that applies to a path and nothing else — no persona, no reporting format. That is what an agent already mid-session needs.

For an agent starting cold with no other instructions, `hint --prompt <paths>` wraps that same knowledge in this book's framing:

```bash
hint src/billing/invoice.ts             # knowledge only (default)
hint --prompt src/billing/invoice.ts    # + role header and verification footer
hint --standalone src/billing/invoice.ts  # implies --prompt, + the tag glossary
```

Framing is a wrapper, not part of the compiled form. Removing it loses no repository knowledge.

---

## `__header__` — the role

Opens `--prompt` output. Casts the agent as a senior engineer implementing from a binding specification, and sets the operating rules: read the whole spec first, implement exactly what is specified, do the complete thing, reuse before writing, don't guess past genuine ambiguity, and let the more specific block win a conflict.

## `__footer__` — the close

Ends `--prompt` output with a verification walk (every declared structure implemented, every acceptance criterion met, no prohibited pattern present, names and types exact, build and tests green) and a required report: **What you built**, **Gaps**, and a **Status** of `DONE` / `DONE_WITH_CONCERNS` / `BLOCKED` / `NEEDS_CONTEXT`.

The gap report is the point: decisions the spec left open come back to the author instead of being silently made.

## `__changes__` — reconciliation

Rendered inside `--prompt` output **only** when a `hint.lock` exists and blocks have drifted since the code was generated. It carries the block-level drift list and scopes the work to it: change only the code governed by a listed block, leave conforming code untouched, implement `new` blocks in full, re-verify a file marked `inherited`.

This is contextual, not selected. There is no mode to pass — HINT renders it exactly when there is drift to reconcile.

> **Note for users of `@openhint/cli` 1.0.x.** This book previously shipped `fix` and `review` modes selected with `--mode`. The mode system was removed in 1.1: `review`'s mechanical half is `hint verify` (deterministic and token-free), and `fix` became the automatic behaviour described above. See the [migration guide](https://github.com/open-hint-dev/hint/blob/main/docs/07-migration.md).

## `__system__` — the tag glossary

The authoritative meaning of every tag this book renders. `hint apply` installs it once into `AGENTS.md` / `CLAUDE.md`, so the default output can be knowledge alone; `--standalone` prepends it for an agent that never loaded those files.
