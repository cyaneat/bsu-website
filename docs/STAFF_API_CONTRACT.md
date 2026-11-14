# Staff module / API proposal

## Frontend routes
- `/staff` — search by full name/position and filter by faculty (client side on initial snapshot).
- `/staff/[slug]` — staff profile.

## Temporary content
`src/lib/staff-data.ts` derives 11 faculty/institute leaders from `src/lib/faculty-data.ts`.
This is NOT a full teacher roster. Personal phone/email, photos, biography, publications and department assignments have not been inferred.

## Suggested API endpoints
- `GET /api/v1/staff?search=&faculty_slug=&department_slug=&page=1&page_size=20`
- `GET /api/v1/staff/{slug}`

Staff object fields:
`slug`, `name`, `position`, `facultySlug`, `facultyName`, `departmentSlug?`, `photoUrl?`, `biography?`, `personalEmail?`, `personalPhone?`, `publications?: {title,url?}[]`, `sourceUrl?`, `updatedAt?`.

Backend should provide pagination, unique/stable identifiers, editorial approvals and visibility/privacy controls for personal contacts.

## Enable navigation
In `src/components/layout/MegaMenu.tsx`, under `Университет` → `Структура` add
`{ label: "Преподаватели и сотрудники", href: "/staff" },`.
Mobile navigation and menu search automatically reuse the same navigation array.

## Review
Run `npm.cmd run lint` and `npm.cmd run build` in the Next.js repository before commit. Validate public staff details with the university before production release.
