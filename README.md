# GTA 6

Сайт для GTA 6, где игроки могут оставить заявку на предрелиз игры (пет-проект).

## Установка

Инструкции по установке проекта на локальную машину.

1. Клонируйте репозиторий:

   ```bash
   git clone https://github.com/dan1e11s/gta-6.git
   ```

2. Установите зависимости для back и front:

   ```bash
   cd back
   npm install
   cd ../front
   npm install
   ```

3. Создайте `.env` файлы в папках `back` и `front` с нужными переменными окружения.

## Запуск

Инструкции по запуску проекта.

1. Запустите сервер (back):

   ```bash
   cd back
   npm run dev
   ```

2. Запустите клиент (front):

   ```bash
   cd ../front
   npm run dev
   ```

## Используемые технологии

- **Back-end**: Node.js, TypeScript, Express, Prisma, PostgreSQL
- **Front-end**: React, TypeScript, Tailwind, React Hook Form, Vite
