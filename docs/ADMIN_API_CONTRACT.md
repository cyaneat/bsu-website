# BSU Admin — first integration contract (draft)

## Scope and safety
`/admin` in this package is an explicitly **unauthenticated, client-only prototype**. It must NEVER be deployed as a real administrative interface without server-enforced authentication and permission checks. Client-side route hiding, middleware-only auth, or disabled buttons are not adequate.

Existing faculty/program data is imported as read-only initial demo data; in-browser edits are ephemeral and never reach Next.js server actions, cookies, localStorage, APIs, public pages, or the database. The other four categories begin empty rather than inventing data. No admin credentials are requested or stored.

## Backend endpoints to agree
- `GET /api/v1/admin/me`: authenticated identity, role, allowed scopes.
- `GET /api/v1/admin/{resource}?page=&limit=&q=&status=`: paginated records; resource in faculties, departments, staff, programs, news, documents.
- `POST /api/v1/admin/{resource}`: draft new record (authorized).
- `GET /api/v1/admin/{resource}/{id}`: one record.
- `PATCH /api/v1/admin/{resource}/{id}`: edit, ETag/updated_at concurrency protection.
- `POST /api/v1/admin/{resource}/{id}/publish`: publication workflow, restricted roles.
- `DELETE /api/v1/admin/{resource}/{id}`: soft-delete plus audit log.
- `POST /api/v1/admin/media`: verified file upload, MIME/size/malware checks, private-by-default.

### Suggested response shape
```json
{
  "items": [{ "id": "...", "slug": "...", "title": { "ru": "...", "ky": "...", "en": "..." }, "status": "draft", "updated_at": "..." }],
  "page": 1, "limit": 20, "total": 0
}
```

## Requirements before public launch
- Authentication with secure HTTP-only cookies (or equivalent), CSRF protection, rate limiting.
- Permissions enforced on the backend for every read/write; university-wide vs faculty-scoped roles.
- Audit trail with editor, timestamp, and old/new values; approval before publication.
- Server-side validation, ownership rules, media processing and backups.
- Multilingual text and stable slugs; redirects from old bsu.kg URLs.
- Migration manifest for legacy URL/file mapping; import idempotency, hashes, review statuses and rollback.
- No exposure of draft-only or private records to the public API.

## Frontend integration plan
Replace `useState` demo store in `AdminWorkspace.tsx` with an authenticated API client after schema agreement. Do not connect browser requests with a secret backend admin key. The separate `/admin` route should have its own protected server layout and access-control checks.
