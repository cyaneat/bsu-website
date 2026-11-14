# BSU academic program detail localization v4

Scope: Program detail page for all 20 current program records. UI labels, breadcrumbs, duration, delivery languages, descriptions and profiles are translated using candidate dictionaries, where data matches exact Russian source strings. Official names, program codes, URLs and underlying records are not mutated.

The content dictionary from phase 3 is INCLUDED (same file path) and extended to cover details; this archive therefore works even if the old v3 script was applied. `src/lib/content-translations.ts` is intentionally replaced by a superset of the previous dictionary.

This is a preliminary editorial translation and not university-approved. Untranslated fields remain in original Russian with a visible fallback notice. The metadata remains Russian until locale-specific URLs/SSR and CMS are implemented. Russian source texts are not altered.

Future: publish translations per field with statuses `draft`, `reviewed`, `published`; add CMS approval workflow and localized SEO routes.
