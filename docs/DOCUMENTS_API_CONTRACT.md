# Documents — API contract (draft)

Frontend adapter: `src/lib/document-data.ts`.

Expected endpoints for backend team:

- `GET /api/v1/documents?query=&category=&page=1&limit=20`
- `GET /api/v1/documents/{slug}`
- `POST /api/v1/admin/documents` (authenticated, authorization required)
- `PATCH /api/v1/admin/documents/{id}` (authenticated)
- `DELETE /api/v1/admin/documents/{id}` (authenticated, audit log)

Suggested record fields:

```json
{
  "id": "uuid",
  "slug": "document-slug",
  "title": "Название документа",
  "description": "Описание",
  "category": "Нормативные документы",
  "status": "published",
  "file_url": null,
  "external_url": "https://bsu.kg/ru/...",
  "file_mime": null,
  "file_size_bytes": null,
  "approved_at": null,
  "updated_at": "2026-11-14T00:00:00+06:00",
  "language": "ru"
}
```

Only display PDF/download controls when an approved `file_url` is available. Uploaded documents must pass size/type validation, malware scanning, RBAC and audit logging. Drafts should not be publicly indexed. Editor should verify current versions and authoritative provenance.
