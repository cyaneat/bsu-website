# BSU Footer & Contacts i18n v9

- Footer abbreviation switches with RU / KG / EN / zh-CN and uses full localized names in proper word order.
- Chinese footer no longer concatenates `uniName` and `uniBy`, preventing stray `命名.` punctuation.
- `/contacts` labels, address display and telephone labels translate across four languages.
- Email, telephone values, source URLs, existing header, root layout and typography are unchanged.
- Public translations require editorial review before official release.

## Check

1. Visit `/contacts`; switch all four locales.
2. Scroll to the footer on `/contacts`, `/`, `/documents` and `/admissions`.
3. Confirm `БГУ`, `БМУ`, `BSU`, `比什凯克国立大学` and Chinese full name.
4. Confirm Kyrgyz `ң/ө/ү` render using the existing Noto Sans layout.
5. Run `npm run lint` and `npm run build`.
