# Модуль кафедр БГУ

## Страницы
- `/departments` — каталог кафедр, поиск, фильтр по факультету;
- `/departments/[slug]` — подробная страница кафедры, связанная с факультетом.

## Источник
Названия кафедр берутся из `src/lib/faculty-data.ts` — временного снимка открытых данных старого сайта БГУ. Не все факультеты содержат полный список кафедр. Нельзя представлять этот каталог как исчерпывающий или актуальный без подтверждения университета.

## API для backend (предлагаемый контракт)
- `GET /api/v1/departments?faculty_slug=...&search=...`
- `GET /api/v1/departments/{slug}`

Рекомендуемая модель: id, slug, faculty_id, name {ru,ky,en}, description {ru,ky,en}, head, staff[], programs[], phone, email, address, updated_at, published. Не возвращать закрытые сведения.

## Интеграция
После утверждения API заменить функцию `getDepartments/getDepartmentBySlug` из `src/lib/department-data.ts` на реальные запросы. Сохранять стабильность slug или настроить редиректы.

## Проверка
`npm.cmd run lint`, `npm.cmd run build`; затем `npm.cmd run dev`, открыть `/departments` и любую карточку.
