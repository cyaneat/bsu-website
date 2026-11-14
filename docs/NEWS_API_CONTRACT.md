# News backend contract (draft)

All published news data currently lives in `src/lib/news-data.ts` and will be swapped for CMS API calls after agreement with backend team.

- `GET /api/v1/news?category=&search=&page=&limit=` => `{items: NewsRecord[], total: number, page: number, limit: number}`
- `GET /api/v1/news/:slug` => `NewsRecord` or 404
- `POST /api/v1/admin/news` => create draft (authenticated editor)
- `PATCH /api/v1/admin/news/:id` => edit draft/publish
- `DELETE /api/v1/admin/news/:id` => delete (authorized)

Record: `id`, `slug`, `title`, `excerpt`, `body` (rich content), `category`, `publishedAt` ISO8601, `status` draft/published, `coverImage` nullable, `gallery`, `sourceUrl`, `locale`.

Security: server-side authz for publish/delete; sanitize rich text; validate upload types/sizes; avoid exposing drafts to public API. Plan localized versions separately.

Current 6 sample cards are summaries of official BSU news as of 2026-11-14. Their `sourceUrl` points to the official news listing, not individual articles. Do not treat these summaries as a full content import. Dates are publication dates where shown by the source, not event dates.
