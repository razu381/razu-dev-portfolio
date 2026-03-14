# Razu — WordPress Developer Portfolio

A modern portfolio website built with React, TypeScript, and Tailwind CSS.

## Technologies

- **Vite** - Fast build tool and dev server
- **React** - UI library
- **TypeScript** - Type safety
- **shadcn/ui** - Beautiful UI components
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Smooth animations

## Getting Started

### Prerequisites

- Node.js 18+ and npm, or [Bun](https://bun.sh/) for faster installations

### Installation

```bash
# Clone the repository
git clone <YOUR_REPO_URL>

# Navigate to the project directory
cd razu-s-brutal-canvas

# Install dependencies
bun install
# or
npm install
```

### Development

```bash
# Start the development server
bun run dev
# or
npm run dev

# The app will be available at http://localhost:3000
```

### Build for Production

```bash
bun run build
# or
npm run build

# Preview the production build
bun run preview
# or
npm run preview
```

### Testing

```bash
bun run test
# or
npm run test
```

### Linting

```bash
bun run lint
# or
npm run lint
```

## Project Structure

```
src/
├── components/       # Reusable React components
│   ├── ui/          # shadcn/ui components
│   └── *.tsx        # Feature components
├── pages/           # Page components
├── hooks/           # Custom React hooks
├── lib/             # Utility functions
└── data/            # Static data

public/              # Static assets
```

## Deployment

This project can be deployed to any static hosting service:

- [Vercel](https://vercel.com)
- [Netlify](https://netlify.com)
- [GitHub Pages](https://pages.github.com)
- Or any other hosting that supports static sites

## License

MIT
