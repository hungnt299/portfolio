# Personal Portfolio Website

A modern, responsive portfolio website built with [Nuxt.js](https://nuxt.com/) and [Tailwind CSS](https://tailwindcss.com/), inspired by [Brittany Chiang's portfolio](https://brittanychiang.com/).

## Features

- 🎨 Clean, modern design with dark theme
- 📱 Fully responsive layout
- ⚡ Fast performance with Nuxt.js
- ♿ Accessibility-focused design
- 🎯 Smooth section navigation
- 🔗 Social media integration
- 📧 Contact section
- 🚀 Easy to customize

## Tech Stack

- **Framework**: Nuxt.js 4
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Font**: Inter (Google Fonts)
- **Deployment**: Ready for Vercel, Netlify, or any static hosting

## Getting Started

### Prerequisites

- Node.js 18+
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

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

### Personal Information

Update the following in `app/pages/index.vue`:

1. **Name and Title**: Replace "Your Name" with your actual name
2. **Bio**: Update the tagline and description
3. **About Section**: Customize the content to match your background
4. **Experience**: Add your work history and skills
5. **Projects**: Showcase your portfolio projects
6. **Contact**: Update email, location, and availability

### Social Links

Update the `socialLinks` array with your actual social media profiles:

```typescript
const socialLinks = [
  { name: "GitHub", url: "https://github.com/yourusername", icon: "🐙" },
  { name: "LinkedIn", url: "https://linkedin.com/in/yourusername", icon: "💼" },
  // Add more social links as needed
];
```

### Experience and Projects

Modify the `experiences` and `projects` arrays to include your actual work history and projects:

```typescript
const experiences = [
  {
    period: "2024 — Present",
    title: "Your Job Title",
    company: "Your Company",
    companyUrl: "https://yourcompany.com",
    description: "Your job description...",
    technologies: ["JavaScript", "TypeScript", "React", "Vue.js"],
  },
];
```

### Styling

The design uses Tailwind CSS classes. You can customize:

- **Colors**: Modify the `bg-slate-900`, `text-slate-300` classes
- **Typography**: Adjust font sizes and weights
- **Spacing**: Modify padding and margin classes
- **Animations**: Customize the CSS animations in the `<style>` section

### Meta Information

Update the site metadata in `nuxt.config.ts`:

```typescript
app: {
  head: {
    title: 'Your Name - Front End Engineer',
    meta: [
      { name: 'description', content: 'Your custom description' }
    ]
  }
}
```

## Deployment

### Build for Production

```bash
yarn build
# or
npm run build
```

### Deploy to Vercel

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com/)
3. Deploy automatically

### Deploy to Netlify

1. Push your code to GitHub
2. Connect your repository to [Netlify](https://netlify.com/)
3. Set build command: `yarn build` or `npm run build`
4. Set publish directory: `.output/public`

## Project Structure

```
hungnt299-portfolio/
├── app/
│   ├── pages/
│   │   └── index.vue          # Main portfolio page
│   ├── assets/
│   │   └── css/
│   │       └── main.css       # Global styles and Tailwind
│   └── app.vue                # App wrapper
├── nuxt.config.ts             # Nuxt configuration
├── package.json               # Dependencies
└── README.md                  # This file
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- Design inspiration from [Brittany Chiang's portfolio](https://brittanychiang.com/)
- Built with [Nuxt.js](https://nuxt.com/) and [Tailwind CSS](https://tailwindcss.com/)
- Icons from emoji (can be replaced with custom SVG icons)

## Support

If you have any questions or need help customizing your portfolio, feel free to open an issue or reach out!
