# Каталог образовательных программ БГУ — контракт frontend/backend

Пока frontend использует `src/lib/program-data.ts`. Backend должен согласовать:

- `GET /api/v1/programs?lang=ru&level=...&faculty=...&q=...&page=1`
- `GET /api/v1/programs/{slug}?lang=ru`
- Стандартизованные `slug`, `id`, `faculty_id` и/или `faculty_slug`, `title`, `level`, `code`, `profile`, `duration`, `languages`, `description`, `source_url`, `updated_at`, `is_published`.
- Локализация RU/KY/EN, пагинация, ошибки 404/500, правила публикации и даты актуальности.
- CMS: роли редакторов и утверждение официальной информации перед публикацией.
- Проверка старых ссылок и 301-редиректы при смене URL.

Данные в адаптере — **временный публичный снимок**, а не актуальный план приёма. Не создавать ложные сведения о стоимости, бюджетных местах или сроках подачи.

Источники:
- https://bsu.kg/ru/specialnosti/
- https://bsu.kg/ru/napravlenija-fpo/
- https://bsu.kg/ru/fakultet-vostokovedenija-i-mezhdunarodnyh-otnoshenij/
- https://bsu.kg/ru/fakultet-zhurnalistiki-i-informacionnyh-sistem/
