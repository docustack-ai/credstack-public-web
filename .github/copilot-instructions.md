# Copilot Instructions for credstack-public-web

## Project Overview
- This is a Next.js project using the Mantine UI library, located in the `src/app` directory.
- The project structure follows Next.js App Router conventions, with each route as a folder containing a `page.tsx` file.
- Shared UI components are in `src/components/`, with some subfolders for use-case-specific components.
- Static content (blogs, features, jobs, etc.) is stored in `public/` as JSON or Markdown files.

## Key Patterns & Conventions
- **Styling:** Uses CSS Modules (e.g., `*.module.css`) for component-level styles. Global styles are in `src/style.css`.
- **Theming:** Theme configuration is in `src/theme.ts` and `src/cssVariableResolver.ts`.
- **Markdown Rendering:** Legal/privacy pages render Markdown from files in `src/app/legal/*/*.md` using a client component (e.g., `PrivacyMarkdown.client.tsx`).
- **Data Loading:** Static data is loaded from `public/` JSON or Markdown files, not from a backend API.
- **Component Usage:** Prefer using or extending components in `src/components/` for UI consistency.
- **Routing:** Dynamic routes use `[slug]` or similar folder names (see `src/app/blogs/[slug]/`).

## Developer Workflows
- **Install dependencies:** `npm install`
- **Run dev server:** `npm run dev`
- **Build for production:** `npm run build`
- **Start production server:** `npm start`
- **No custom test scripts or CI/CD workflows are defined in this repo.**

## Integration & External Dependencies
- Uses Mantine for UI (see [mantine.dev](https://mantine.dev/guides/next/)).
- No backend or API integration; all data is static and local.
- No custom build or deployment scripts beyond standard Next.js commands.

## Examples
- To add a new blog: place a Markdown file in `public/content/` and update `public/blogs.json`.
- To add a new route: create a folder in `src/app/` with a `page.tsx` file.
- To update theme: edit `src/theme.ts` and `src/cssVariableResolver.ts`.

## References
- [src/app/layout.tsx]: App-wide layout and providers
- [src/components/]: Shared UI components
- [public/]: Static data and assets
- [src/theme.ts], [src/cssVariableResolver.ts]: Theming

---
For more, see the [Mantine Next.js guide](https://mantine.dev/guides/next/).
