# Project Context

## Purpose
**CCTAAL (Câmara de Comércio, Tecnologia e Agrointeligência da América Latina)**
The goal is to build a highly sophisticated institutional website that functions as a "Market Intelligence Terminal". 
Aesthetic: **Bloomberg Terminal / Fintech / Premium Corporate**. 
Key themes: Economic Diplomacy, Agro-intelligence, Green Technology, and High-End Corporate Governance.
The site is divided into "Institutional Credibility" (Chamber, Board, Values) and "Market Intelligence" (Data, News, Tickers).

## Tech Stack
- **Framework**: React 18 + Vite (TypeScript)
- **Styling**: Tailwind CSS (v3) + Vanilla CSS layers
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Routing**: React Router DOM (v6)
- **State Management**: React Hooks (Context API if needed)

## Project Conventions

### Code Style
- **Components**: Functional components with strict TypeScript interfaces.
- **Nesting**: Avoid deep nesting; extract sub-components (e.g., `Hero`, `NewsHub`).
- **File Structure**: `src/components` for reusable UI, `src/pages` for routes, `src/data` for mocks.
- **Tailwind**: Use utility classes efficiently. Prefer custom colors defined in `tailwind.config.js` or `index.css`.
- **Language**: English for code (variables, comments), Portuguese (PT-BR) for user-facing content.

### Design System & Theme
- **Primary Green**: `#4a662d` (Institutional excellence, Agribusiness)
- **Secondary Copper**: `#7c522e` (Earth, Prestige, Highlights)
- **Backgrounds**: Dark Mode (`#1a1a1a`) for intelligence/manifesto sections; Clean Light (`#f9f9f7`) for reading/news.
- **Typography**: 
    - **Serif**: *Playfair Display* (Titles, Elegant Headers)
    - **Sans**: *Inter* or *DM Sans* (Body, UI elements)
    - **Mono**: *JetBrains Mono* (Data, Tickers, Equations)

### Architecture Patterns
- **Layout Wrapper**: Use `Layout.tsx` (Header + Outlet + Footer) for consistent page structure.
- **Data Mocking**: Currently using static TS files in `src/data` (e.g., `newsData.ts`). Future integration with CMS/Backend.
- **Responsive**: Mobile-first approach using Tailwind breakpoints (`md:`, `lg:`).

### Git Workflow
- **Main Branch**: `main` (Production-ready code)
- **Commit Style**: Conventional Commits (feat, fix, docs, style, refactor)

## Domain Context
- **CCTAAL**: Connects Latin America to Asia (China focus) in AgTech and Commerce.
- **Target Audience**: C-Level executives, Government officials, Investors, Large-scale producers.
- **Voice**: Professional, Strategic, Diplomatic, Data-driven, Visionary.

## Important Constraints
- **Performance**: High priority on smooth animations (Framer Motion) and fast load times.
- **Accessibility**: Semantic HTML and readable contrast ratios.
- **Asset Management**: Images stored in `public/` or loaded from high-quality external sources (Unsplash).

## External Dependencies
- `react-router-dom`: Navigation
- `framer-motion`: UI Animations
- `lucide-react`: Iconography
- `clsx` / `tailwind-merge`: (Optional/If used) for class combining
