# Hung Ngo — Portfolio (Nuxt 4 + Tailwind 4)

A modern, responsive personal portfolio built with [Nuxt 4](https://nuxt.com/) and [Tailwind CSS v4](https://tailwindcss.com/), inspired by [Brittany Chiang's portfolio](https://brittanychiang.com/).

## Features

- 🎨 Clean, accessible dark theme
- 📱 Fully responsive layout
- ⚡ Nuxt 4 performance with Vite
- 🧩 Nuxt UI components (`@nuxt/ui`)
- 🖼️ Image optimization (`@nuxt/image`)
- 🎯 Smooth section navigation and active section highlighting
- 🔗 Social media integration with SVG icons
- 📧 Contact section
- 🚀 Easy to customize

## Tech Stack

- **Framework**: Nuxt 4 (Vue 3.5)
- **Styling**: Tailwind CSS v4 via `@tailwindcss/vite`
- **Language**: TypeScript 5
- **UI**: `@nuxt/ui`
- **Images**: `@nuxt/image`
- **Linting**: ESLint 9 (`@nuxt/eslint`)
- **Font**: Montserrat (Google Fonts)
- **Deployment**: Vercel, Netlify, or any static hosting

## Getting Started

### Prerequisites

- Node.js 18+ (20 LTS recommended)
- Yarn or npm

### Installation

1. Clone the repository:

```bash
git clone <your-repo-url>
cd hungnt299-portfolio
```

2. Install dependencies:

```bash
yarn install
# or
npm install
```

3. Start the development server:

```bash
yarn dev
# or
npm run dev
```

4. Open http://localhost:3000 in your browser.

### Useful scripts

```bash
# Build for production (server)
yarn build

# Generate static site (for static hosting)
yarn generate

# Preview production build locally
yarn preview
```

## Customization

Most content lives in `app/pages/index.vue`.

### Personal Information & Sections

Update these constants in `app/pages/index.vue`:

```ts
const sections = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/yourusername",
    icon: "<svg>…</svg>",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/yourusername",
    icon: "<svg>…</svg>",
  },
];

const experiences = [
  {
    period: "2024 — Present",
    title: "Your Job Title",
    company: "Your Company",
    companyUrl: "https://yourcompany.com",
    description: "Your job description…",
    technologies: ["JavaScript", "TypeScript", "Vue"],
    employmentType: "Full-time",
    workMode: "Hybrid",
  },
];

const projects = [
  {
    title: "Project Name",
    period: "2024",
    description: "Short project description…",
    technologies: ["Nuxt", "Tailwind CSS", "TypeScript"],
    responsibilities: ["What you did", "Another highlight"],
  },
];

const contactInfo = {
  email: "you@example.com",
  phone: "+1 234 567 8900",
  location: "City, Country",
  available: "Available for new opportunities",
};
```

### Styling

- Tailwind v4 is imported in `app/assets/css/main.css` using `@import "tailwindcss";`
- The base font is Montserrat (Google Fonts) configured in the same file
- Colors, spacing, and animations are controlled via Tailwind utility classes and local `<style scoped>` in `index.vue`

### Meta Information

Update site metadata in `nuxt.config.ts`:

```ts
app: {
  head: {
    title: 'Hung Ngo - Software Engineer',
    meta: [
      { name: 'description', content: 'Front End Engineer building accessible, pixel-perfect digital experiences for the web.' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/icons8-h-key-16.png' }]
  }
}
```

## Deployment

### Build for Production

```bash
# Server build
yarn build

# Static export for static hosting
yarn generate
```

### Deploy to Vercel

1. Push your code to GitHub
2. Connect your repository to `vercel.com`
3. Framework preset: Nuxt — it will use `yarn build` automatically

### Deploy to Netlify (static)

1. Push your code to GitHub
2. Connect your repository to `netlify.com`
3. Set build command: `yarn generate` (or `npm run generate`)
4. Set publish directory: `.output/public`

## Project Structure

```
hungnt299-portfolio/
├── app/
│   ├── pages/
│   │   ├── index.vue                 # Main portfolio page
│   │   ├── cv.vue                    # Resume page
│   │   └── recommendation-letter.vue # Recommendation letter page
│   ├── assets/
│   │   └── css/
│   │       └── main.css             # Global styles (Tailwind v4 + fonts)
│   └── app.vue                      # App wrapper
├── public/
│   ├── Ngo-Thanh-Hung-CV.pdf
│   ├── Ngo-Thanh-Hung-Recommendation-Letter.pdf
│   └── icons8-h-key-16.png
├── nuxt.config.ts                   # Nuxt configuration (modules, head, css)
├── eslint.config.mjs                # ESLint config (via @nuxt/eslint)
├── package.json
├── tsconfig.json
└── README.md
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

MIT

## Acknowledgments

- Design inspiration from [Brittany Chiang's portfolio](https://brittanychiang.com/)
- Built with [Nuxt](https://nuxt.com/) and [Tailwind CSS](https://tailwindcss.com/)
- SVG icons for social links

## Support

If you have any questions or need help customizing your portfolio, feel free to open an issue or reach out!
