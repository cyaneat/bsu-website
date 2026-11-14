# BSU admin forms v2 — demonstration only

## What's changed
- Module-specific editors for faculties, departments, staff, programs, news, documents.
- Draft/review status **within browser memory only**.
- Preview modal for existing/demonstration records.
- No file upload or persistent storage. URL fields for media/documents are only strings.
- Public site is unaffected. The existing `/admin` page continues passing `seedFaculties` and `seedPrograms`.

## Backend contract proposal
- GET /api/v1/admin/me (server-verified permissions)
- GET /api/v1/admin/{resource}?page=&limit=&q=&status=
- POST /api/v1/admin/{resource} (create draft)
- PATCH /api/v1/admin/{resource}/{id} (edit draft + optimistic locking)
- POST /api/v1/admin/{resource}/{id}/submit (review workflow)
- POST /api/v1/admin/{resource}/{id}/publish (role-restricted)
- POST /api/v1/admin/media (multipart upload with validation and security scanning)
- Complete audit history, backups, permission scopes and translations required.

## Security
This frontend module is *not* an authentication or authorization system. **Do not expose `/admin` on production** until server-side access restrictions exist. Never rely on client-side controls to enforce permissions.

## Migration
Retain `source_url`, `legacy_url`, original file location, checksum, source date, editorial review status and new canonical URL for all migrated materials.
