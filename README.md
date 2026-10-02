# Портфолио — Мария Мельничук

Первая страница портфолио продуктового дизайнера, перенесённая из макета Figma («Портфолио», фрейм Desktop - 11).

Стек: Next.js (App Router), TypeScript, Tailwind CSS v4, shadcn/ui.

Опубликованная страница: https://marimel9212.github.io/portfolio/

Каждый пуш в `main` заново собирает сайт и выкладывает его на GitHub Pages.

## Запуск

```bash
npm install
npm run dev
```

Сайт откроется на http://localhost:43123.

## Где что лежит

- `src/app/page.tsx` — сама страница.
- `src/components/site-header.tsx` — верхняя навигация.
- `src/components/profile-card.tsx` — карточка «Product Designer» с фото и контактами.
- `src/components/cases/` — блок «Кейсы»: карточки, обложки с мокапами iPhone и экран приложения внутри них.
- `src/content/site.ts` — ссылки на Telegram, почту и CV. Сейчас там заглушки, замени на свои.
- `public/figma/` — картинки и иконки, выгруженные из макета.

## Шрифты

Geist, Homenaje и Inter подключаются через `next/font/google`. Шрифты SF Pro Text и Stolzl из мокапов приложения недоступны в Google Fonts, поэтому на Apple-устройствах используется системный SF, а на остальных — Inter.
