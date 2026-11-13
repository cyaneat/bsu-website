# Факультеты и институты БГУ — миграция контента

Дата сверки: 14 ноября 2026 года. Данные взяты с открытых страниц https://bsu.kg/ru/.

## Как это работает сейчас
- `/faculties` — поиск и фильтр по 11 подтверждённым подразделениям.
- `/faculties/[slug]` — универсальная подробная страница.
- `src/lib/faculty-data.ts` — временный каталог (источник данных), содержит `sourceUrl` для каждой записи.
- `src/components/faculties/FacultyDirectory.tsx` — клиентский поиск, без backend.
- Поля, для которых нет подтверждений, не отображаются. Фотографии намеренно не скопированы.

## Перед публикацией
1. Редакторы университета проверяют полноту подразделений, ФИО, должности, контакты, кафедры и образовательные программы.
2. Согласовать право использования фотографий и содержимого первоисточника.
3. Протестировать кыргызскую и английскую версии; текущая версия — только русская.
4. Согласовать модель данных с backend-разработчиком и CMS-редакторами.

## Предлагаемый API-контракт
- `GET /api/v1/faculties?lang=ru&type=faculty&q=` — список, пагинация, фильтр.
- `GET /api/v1/faculties/{slug}?lang=ru` — одна запись.
- Поля: `id, slug, kind, name, shortName, category, summary, leader, leadTitle, phone, email, address, departments, programs, sourceUrl, updatedAt`.
- Для переводов сервер возвращает локализованные `name`, `summary`, `departments`, `programs`.
- После подключения API заменить реализации `getFaculties` и `getFacultyBySlug` в `src/lib/faculty-data.ts`.
- Не подставлять пользовательский ввод в произвольные URL; API должен валидировать `slug`.

## Исходные URL
- https://bsu.kg/ru/fakultet-pedagogicheskogo-obrazovanija/
- https://bsu.kg/ru/fakultet-vostokovedenija-i-mezhdunarodnyh-otnoshenij/
- https://bsu.kg/ru/fakultet-russkoj-filologii/
- https://bsu.kg/ru/fakultet-zhurnalistiki-i-informacionnyh-sistem/
- https://bsu.kg/ru/fakultet-jekologii-i-menedzhmenta/
- https://bsu.kg/ru/fakultet-evropejskih-civilizacij/
- https://bsu.kg/ru/socialno-psihologicheskij-fakultet/
- https://bsu.kg/ru/kyrgyz-filologijasy-fakulteti/
- https://bsu.kg/ru/kyrgyzsko-kitajskij-fakultet/
- https://bsu.kg/ru/fakultet-jekonomiki-i-finansov/
- https://bsu.kg/ru/indo-institut-nepreryvnogo-i-distancionnogo-obrazovanija/
