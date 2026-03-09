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
*   📂 **Data-Driven UI**: All hardcoded text and lists are extracted to a centralized `src/data` directory for quick and painless content updates.

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
│   ├── About.tsx       # Personal biography
│   └── Footer.tsx      # Footer links and info
├── data/
│   └── index.ts        # Centralized static data (skills arrays, project info, nav items)
└── locales/            # Translation Files
    ├── en.json         # English translations
    └── zh.json         # Chinese translations
```

## How to Customize & Extend

### Modifying Content (Data)

You don't need to dig into React components to change your portfolio content. All lists, featured projects, and core skills are stored in `src/data/index.ts`.

Simply open `src/data/index.ts` and modify the arrays:

```typescript
// Example: Adding a new skill
export const coreSkills = [
  'TypeScript', 'React', 'Next.js', 'Node.js', 'PostgreSQL', 'AWS', 'GraphQL' // Added GraphQL
];
```

### Adding or Updating Translations (i18n)

The project uses `react-i18next`. To change a piece of text (e.g., the Hero title), you only need to update the JSON files.

1. Open `src/locales/en.json` (for English) or `src/locales/zh.json` (for Chinese).
2. Modify the corresponding key:

```json
"hero": {
  "greeting": "Hello, I am [Your Name] 👋"
}
```

If you add a entirely new section to the site:
1. Add the text keys to both `en.json` and `zh.json`.
2. Use the `useTranslation` hook in your component:
   ```tsx
   const { t } = useTranslation();
   <h1>{t('newSection.title')}</h1>
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