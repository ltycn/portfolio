<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Personal Portfolio App

A modern, highly-scalable, and customizable personal portfolio web application built with **React**, **Vite**, **TypeScript**, and **Tailwind CSS**.
It includes a clean architecture, dynamic data extraction, and **multi-language support** (English and Chinese) out-of-the-box.

## Features

*   ⚡️ **Vite + React 19** for blazing fast performance.
*   🎨 **Tailwind CSS** & **Motion** for beautiful, fluid animations.
*   🌍 **i18n Multi-Language Support** (`react-i18next`) supporting English and Chinese seamlessly.
*   🏗️ **Component-Driven Architecture**: Clean, split components for easy maintenance and scaling.
*   📂 **Data-Driven UI**: All text, lists, and structure (such as navigation items, project details, and core skills) are centralized in the `src/locales/` directory, allowing you to seamlessly update content directly through localized JSON arrays.

## Getting Started

**Prerequisites:** Node.js (v18+)

### 1. Installation

Clone the repository and install the dependencies:

```bash
npm install
```

### 2. Environment Variables

If your application interacts with external APIs (like Google Gemini), copy the example environment file and add your keys:

```bash
cp .env.example .env.local
```
*(Ensure `GEMINI_API_KEY` is set if utilizing AI features).*

### 3. Run Locally

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:3000`.

### 4. Build for Production

Compile the application for production deployment:

```bash
npm run build
```
The compiled files will be located in the `dist/` directory.

---

## Project Architecture

The codebase has been refactored for maximum readability and scalability.

```text
src/
├── App.tsx             # Main entry point layout
├── main.tsx            # React DOM mounting
├── index.css           # Global Tailwind CSS styles
├── i18n.ts             # i18next configuration
├── components/         # Independent React Components
│   ├── Navbar.tsx      # Navigation and Language Switcher
│   ├── Hero.tsx        # Introduction banner
│   ├── Projects.tsx    # Project showcases
│   ├── Skills.tsx      # Core competencies list
│   └── Footer.tsx      # Footer links and info
├── pages/              # Route views
│   ├── Home.tsx        # Home Page View
│   ├── About.tsx       # About Page View
│   ├── Projects.tsx    # Projects Page View
│   ├── HireMe.tsx      # Hire Me Page View
│   └── Resume.tsx      # Resume Page View
└── locales/            # Translation & Data Files
    ├── en.json         # English content (text & lists)
    └── zh.json         # Chinese content (text & lists)
```

## How to Customize & Extend

### Modifying Content & Translations (i18n)

You don't need to dig into React components to change your portfolio content. All lists, featured projects, core skills, and general text strings are stored inside the locale files.

The project uses `react-i18next`. To change a piece of text (e.g., the Hero title) or a list item (e.g., Skills list), you only need to update the JSON files (`src/locales/en.json` or `src/locales/zh.json`).

1. Open `src/locales/en.json` (for English) or `src/locales/zh.json` (for Chinese).
2. Modify the corresponding key or array:

```json
"coreSkills": [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "PostgreSQL",
  "AWS",
  "GraphQL" // Added GraphQL
],
"hero": {
  "greeting": "Hello, I am [Your Name] 👋"
}
```

If you add a entirely new section to the site:
1. Add the text keys to both `en.json` and `zh.json`.
2. Use the `useTranslation` hook in your component:
   ```tsx
   import { useTranslation } from 'react-i18next';
   // ...
   const { t } = useTranslation();
   <h1>{t('newSection.title')}</h1>

   // For retrieving lists:
   const newList = t('newSection.list', { returnObjects: true }) as string[];
   ```

### Adding a New Language

1. Create a new JSON file in `src/locales/` (e.g., `es.json` for Spanish).
2. Import and add it to the `resources` object inside `src/i18n.ts`:
   ```typescript
   import esTranslation from './locales/es.json';
   // ...
   resources: {
     en: { translation: enTranslation },
     zh: { translation: zhTranslation },
     es: { translation: esTranslation } // Added Spanish
   }
   ```
3. Update the language toggle button logic in `src/components/Navbar.tsx` to include your new language.