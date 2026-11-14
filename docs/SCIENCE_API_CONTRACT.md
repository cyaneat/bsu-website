# BSU science section — migration and API draft

## Routes
- `/science` — science overview
- `/science/research` — research coordination
- `/science/conferences` — conferences and events
- `/science/publications` — journals/publications
- `/science/dissertation-councils` — doctoral process and councils; **no unverified councils listed**

## Backend models proposed
- `science_pages`: id, slug, title (ru/ky/en), body (ru/ky/en), published_at, updated_at, status
- `science_events`: id, slug, title, description, starts_at, ends_at, location, status, media[]
- `journals`: id, slug, name, issn, website, issues[]
- `journal_issues`: id, journal_id, year, number, cover_media_id, documents[]
- `dissertation_councils`: id, code, name, approval_document_id, start_date, end_date, status, members[]
- `migration_manifest`: old_url, new_url, source_type, source_hash, file_hash, review_status, migrated_at

## Endpoints proposed
- GET /api/v1/science/pages
- GET /api/v1/science/pages/{slug}
- GET /api/v1/science/events?page=&limit=&type=
- GET /api/v1/science/journals
- GET /api/v1/science/journals/{slug}/issues
- GET /api/v1/science/dissertation-councils

Backend shall enforce access control for mutating endpoints and verify uploaded files. Do not assume entries copied from historical announcements are current. Preserve canonical URLs and redirects during migration.

## Sources
- https://bsu.kg/ru/otdel-nauki-aspirantury-i-doktorantury/
- https://bsu.kg/ru/category/nauka/
- https://bsu.kg/ru/vestnik/
- https://bsu.kg/ru/nauchnyj-zhurnal-izvestija-bgu/
- https://bsu.kg/ru/v-bgu-proshjol-seminar-po-napisaniju-statej-i-publikacii-v-baze-scopus/
