# Science module translation — phase 6

- Routes: `/science`, `/science/research`, `/science/conferences`, `/science/publications`, `/science/dissertation-councils`.
- Four UI languages: `ru`, `ky`, `en`, `zh-CN`, using existing `LocaleProvider`.
- Original records, slugs and URLs in `src/lib/science-data.ts` stay unchanged.
- Translations in `src/lib/science-i18n.ts` are editorial **drafts**; approval is required before the official launch.
- The article/journal files linked from bsu.kg are **not translated or migrated** by this module.
- Metadata remains Russian because the current app uses localStorage-based locale selection. Proper per-locale SEO requires server-visible language routes and canonical/hreflang tags in a later phase.

## Backend contract suggestion

`GET /api/v1/science?lang=ru|ky|en|zh-CN` for list; `GET /api/v1/science/{slug}?lang=...` for details. Return per-field `translation_status` (draft/reviewed/published), `source_url`, and keep a stable `slug` independent of language. The CMS must only serve published translations on the official site.
