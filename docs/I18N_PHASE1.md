# BSU — I18N phase 1 (UI dictionaries)

## Supported languages
`ru` (Russian default), `ky` (Kyrgyz), `en` (English), `zh-CN` (Simplified Chinese).

## Implemented
- Header, mobile navigation, desktop mega menu, search within navigation, homepage blocks, and footer use typed dictionaries.
- Choice persists in `localStorage` on this browser; route changes do not reset it.
- The HTML `lang` attribute starts as `ru` and changes when the language is selected. This first iteration is *client-side*, so crawlers still receive a Russian initial document.
- A clear notice appears on non-Russian selections: inner pages and legacy news/document/staff/faculty records may still be Russian.
- Existing Next.js routes and public page URLs stay unchanged; the API is unaffected.

## Known limits / next development phase
- **NOT a fully translated website.** Inner route headings and static source records need translation and editorial approval. Do not auto-publish unreviewed translations.
- Create locale routes (`/ru/...`, `/ky/...`, `/en/...`, `/zh-CN/...`) for SEO, locale-specific metadata and `hreflang`. Coordinate with the backend URL migration manifest and avoid breaking current links.
- Add backend fields for `title`, `description`, `content` per locale, plus review status and original language. API must return `available_locales` to prevent empty language choices; public pages can visibly fall back to Russian for unapproved fields.
- Some untranslated legacy records are Russian even after the UI language changes. The fallback banner is intentional.
- The UI language picker is not authorization and stores no sensitive values.
- Before public production deployment, ensure `/admin` has server-side authentication and permissions.

## Test checklist
1. Switch to KG, EN and 中文; the header/menu/hero/footer should change without a full-page refresh.
2. Use the mobile menu and desktop mega menu; links should navigate to the same pages.
3. Visit `/faculties` and return home; the chosen language should remain selected.
4. Refresh the browser and check that language persists.
5. Run `npm.cmd run lint` and `npm.cmd run build`.
6. Clear browser site data: the default should be RU.

## Backend suggestion
A multilingual field can use `Record<"ru" | "ky" | "en" | "zh-CN", string | null>` with editorial approval metadata per locale. Do not store file metadata only in translated strings; keep file hashes and document source URLs language-neutral.
