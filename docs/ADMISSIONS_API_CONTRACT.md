# BSU Admissions API — draft

The current module is read-only and uses a reviewed snapshot from existing BSU pages. Do not treat its content as approved 2026–2027 admission rules.

Suggested API endpoints:
- `GET /api/v1/admissions/pages?locale=ru`: editorial pages, with draft/published workflow.
- `GET /api/v1/admissions/requirements?citizenship=kg|foreign&level=...`: document requirements, versioned by admissions campaign.
- `GET /api/v1/admissions/campaigns`: year-specific deadlines, thresholds, application links and official rule document references.
- `GET /api/v1/admissions/tuition?year=...&program_id=...`: approved fees with currency, source document and effective dates.
- `GET /api/v1/admissions/faqs?locale=...`: published FAQs.
- `GET /api/v1/admissions/contacts`: verified commission contacts.

Requirements:
- Backend enforces publication rights; no public drafts.
- Version admission terms by academic year; preserve source URL, effective date and editor audit log.
- Support `ru`, `ky`, `en` and mark missing translations; never silently invent translations.
- Stable slugs and 301 redirects for legacy `bsu.kg` links during migration.
- Do not expose private applicant or application data through public routes.
- Document schemas, filters, pagination and errors in Swagger/OpenAPI.
