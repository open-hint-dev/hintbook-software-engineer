// Validates the emit packs without installing anything, matching the dependency-free style of the
// rest of this repository's CI.
//
// Emit templates are shipped artifacts: a mistake in one does not fail loudly, it writes something
// wrong into a consumer's file. The three mistakes that fail silently are all checked here.

import * as Fs from 'node:fs';
import * as Path from 'node:path';

// Every placeholder the engine resolves, and whether it takes a `:argument`. A token the engine does
// not recognize is emitted verbatim, so `{childs:arg}` would put a literal `{childs:arg}` into
// somebody's source file rather than failing.
const PLACEHOLDERS = {
    name: false,
    id: false,
    ident: false,
    type: false,
    body: false,
    doc: false,
    children: 'optional',
    child: 'optional',
    hole: 'optional',
};

const problems = [];

function fail(file, message) {
    problems.push(`${file}: ${message}`);
}

// The engine's own rule for what opens a placeholder: a `{` followed by a letter, closed by a `}` on
// the same line with no nested `{`. Anything else is a brace that means itself — `func f() {`,
// `type X = { id: string }` — and templates are full of those.
function* placeholders(content) {
    for (let index = 0; index < content.length; index++) {
        if (content[index] !== '{' || !/[A-Za-z]/.test(content[index + 1] ?? '')) {
            continue;
        }

        let end = -1;

        for (let scan = index + 1; scan < content.length; scan++) {
            const char = content[scan];

            if (char === '\n' || char === '{') {
                break;
            }

            if (char === '}') {
                end = scan;
                break;
            }
        }

        if (end !== -1) {
            yield content.slice(index + 1, end);
            index = end;
        }
    }
}

function checkTemplate(file, content) {
    for (const raw of placeholders(content)) {
        const expression = raw.replace(/\bsep\s*=\s*"(?:[^"\\]|\\.)*"/, '').trim();
        const [head] = expression.split('|');
        const [kind, ...rest] = head.trim().split(':');
        const arity = PLACEHOLDERS[kind];

        if (arity === undefined) {
            fail(file, `unknown placeholder {${raw}} — it will be emitted verbatim into the artifact`);
            continue;
        }

        if (arity === false && rest.length > 0) {
            fail(file, `{${kind}} takes no argument, so {${raw}} will be emitted verbatim`);
        }
    }

    // A `{?…}` group is scanned by balanced braces; an unbalanced one silently swallows the rest.
    let depth = 0;

    for (const char of content) {
        if (char === '{') depth += 1;
        else if (char === '}') depth -= 1;

        if (depth < 0) break;
    }

    if (depth !== 0) {
        fail(file, 'braces are unbalanced');
    }
}

function main() {
    const keywords = new Set(
        Fs.readdirSync('keywords')
            .filter((file) => file.endsWith('.md'))
            .map((file) => Path.basename(file, '.md')),
    );

    if (!Fs.existsSync('emit')) {
        console.log('No emit packs in this hintbook.');

        return;
    }

    const packs = Fs.readdirSync('emit', { withFileTypes: true }).filter((entry) => entry.isDirectory());

    if (packs.length === 0) {
        problems.push('emit/ exists but contains no packs');
    }

    for (const pack of packs) {
        const dir = Path.join('emit', pack.name);
        const manifestPath = Path.join(dir, 'hintbook.json');

        if (!Fs.existsSync(manifestPath)) {
            fail(dir, 'has no hintbook.json, so nothing will ever load it');
            continue;
        }

        const manifest = JSON.parse(Fs.readFileSync(manifestPath, 'utf8'));

        if (!manifest.target) {
            fail(manifestPath, 'declares no "target", so it loads as a vocabulary and shadows the real keywords');
        }

        if (!Array.isArray(manifest.match) || manifest.match.length === 0) {
            fail(manifestPath, 'declares no "match" globs, so no output path will ever select it');
        }

        // `hint extract` maps a symbol kind onto a keyword; a keyword that does not exist would draft
        // blocks the vocabulary cannot render.
        for (const [kind, keyword] of Object.entries(manifest.extract ?? {})) {
            if (!keywords.has(keyword)) {
                fail(manifestPath, `extract maps ${kind} → "${keyword}", which is not a keyword in this hintbook`);
            }
        }

        const templates = Fs.readdirSync(dir).filter((file) => file.endsWith('.tmpl'));

        if (templates.length === 0 && !manifest.symbols) {
            fail(dir, 'has neither templates nor a "symbols" adapter, so it does nothing');
        }

        for (const template of templates) {
            const name = Path.basename(template, '.tmpl');
            const file = Path.join(dir, template);

            // Templates are looked up by canonical keyword. One filed under a synonym is never found,
            // and the block it was written for silently emits nothing.
            if (!keywords.has(name)) {
                fail(file, `there is no keywords/${name}.md — a template filed under a synonym or a typo is never found`);
            }

            checkTemplate(file, Fs.readFileSync(file, 'utf8'));
        }

        console.log(`emit/${pack.name}: ${templates.length} template(s) checked for target "${manifest.target}".`);
    }

    if (problems.length > 0) {
        for (const problem of problems) {
            console.error(`::error::${problem}`);
        }

        process.exit(1);
    }

    console.log('Emit packs are consistent with the vocabulary.');
}

main();
