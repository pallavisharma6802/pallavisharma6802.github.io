# Pallavi Sharma · ML Engineer

My personal portfolio, featuring the AI products, ML systems, and research I work on across healthcare and IT.

**[Visit the portfolio →](https://pallavisharma6802.github.io/)**

[![Deploy to GitHub Pages](https://github.com/pallavisharma6802/pallavisharma6802.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/pallavisharma6802/pallavisharma6802.github.io/actions/workflows/deploy.yml)

[LinkedIn](https://www.linkedin.com/in/pallavisharma6802/) · [GitHub](https://github.com/pallavisharma6802) · [Email](mailto:sharmapallavi6802@gmail.com)

## About me

I'm an ML engineer based in Madison, Wisconsin, with an MS in Data Science from the University of Wisconsin–Madison. I build AI products end to end: agents, retrieval pipelines, ML models, APIs, and the interfaces people use to work with them.

My work spans agentic AI, LLM evaluation, medical imaging, and production ML. I enjoy working across disciplines and turning a domain problem into a system a team can use.

## Explore the portfolio

| Page | What you'll find |
| --- | --- |
| [Home](https://pallavisharma6802.github.io/) | My background, areas of focus, and contact details |
| [Work](https://pallavisharma6802.github.io/work) | Projects with technical context, results, and source links |
| [Experience](https://pallavisharma6802.github.io/experience) | Roles, research, and education |
| [Skills](https://pallavisharma6802.github.io/skills) | An interactive skills graph and skills grouped by area |

### Selected projects

- **[Agentic Multi-Cloud Ticket Resolution](https://github.com/pallavisharma6802/Multi-Cloud-AI-Agent-for-Ticket-Resolution)** — A multi-agent IT support pipeline with retrieval, answer grading, and an evaluation harness.
- **[DoIT Knowledge Base Agent](https://github.com/pallavisharma6802/DoIT-Help-Desk-Agent)** — A knowledge base assistant with cited answers and escalation to human support.
- **[Trust Under Pressure](https://github.com/pallavisharma6802/Trust-Under-Pressure-Manipulation-Resistance-in-LLM-Agents)** — Empirical studies of manipulation resistance in tool-calling and multi-agent LLM systems.
- **[Procedural Intelligence](https://github.com/pallavisharma6802/Procedural-Intelligence-prototype)** — A prototype that reconstructs a clinical procedure timeline and generates documents from a shared case state.

## Built with

Next.js App Router, React, TypeScript, and Tailwind CSS. The site includes responsive layouts, light and dark themes, project filtering, and an interactive skills graph.

The site is exported as static files and hosted on **GitHub Pages**, with deployment handled by GitHub Actions.

## Run locally

Use Node.js 20, matching the deployment workflow.

```bash
git clone https://github.com/pallavisharma6802/pallavisharma6802.github.io.git
cd pallavisharma6802.github.io
npm ci
npm run dev
```

Open [localhost:3000](http://localhost:3000).

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run lint` | Run ESLint |
| `npm run build` | Build the site and export static files to `out/` |

## Update the portfolio

- **Profile, projects, experience, skills, and education:** `src/lib/data.ts`
- **Pages:** `src/app/` — home, work, experience, and skills
- **UI components:** `src/components/`
- **Colors, typography, and global styles:** `src/app/globals.css`
- **Theme behavior:** `src/context/ThemeContext.tsx`
- **Images and other static assets:** `public/`

## Deployment

Pushing to `main` triggers the [Deploy to GitHub Pages workflow](.github/workflows/deploy.yml). It installs dependencies with `npm ci`, runs `npm run build`, uploads `out/`, and deploys the result to GitHub Pages. The workflow can also be started manually from the repository's Actions tab.

Static export is configured with `output: "export"` in `next.config.ts`. Keep additions compatible with static hosting.
