# Developer Portfolio

A modern, responsive portfolio website built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

![Portfolio Preview](./public/og-image.png)

## Features

- **Modern Tech Stack**: Next.js 14 (App Router), React 18, TypeScript
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Smooth Animations**: Framer Motion for fluid transitions and interactions
- **SEO Optimized**: Meta tags, Open Graph, Twitter cards, sitemap, robots.txt
- **Accessible**: Semantic HTML, focus states, keyboard navigation
- **Performance**: Optimized images, fonts, and assets

## Sections

- **Hero**: Full viewport welcome section with animated elements
- **About**: Personal introduction with stats
- **Skills**: Technology grid with hover animations
- **Experience**: Timeline of professional experience
- **Projects**: Showcase of featured work with links
- **Contact**: Contact form and information
- **Footer**: Quick links and social connections

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run format` | Format code with Prettier |

## Customization

### Personal Information

Update the following files with your information:

1. **`src/app/layout.tsx`**: Update metadata (title, description, URLs)
2. **`src/components/sections/Hero.tsx`**: Your name and tagline
3. **`src/components/sections/About.tsx`**: Bio and stats
4. **`src/components/sections/Experience.tsx`**: Work history
5. **`src/components/sections/Projects.tsx`**: Your projects
6. **`src/components/sections/Contact.tsx`**: Contact details
7. **`src/components/layout/Footer.tsx`**: Social links

### Styling

- **Colors**: Edit `tailwind.config.ts` to customize the color palette
- **Fonts**: Change fonts in `src/app/layout.tsx`
- **Animations**: Modify Framer Motion variants in components

### Adding Project Images

1. Place images in the `public/projects/` directory
2. Update the image paths in `src/components/sections/Projects.tsx`

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Deploy with default settings

### Other Platforms

Build the production version:
```bash
npm run build
```

The output will be in the `.next` directory.

## Project Structure

```
portfolio/
├── public/              # Static assets
│   └── projects/        # Project images
├── src/
│   ├── app/
│   │   ├── globals.css  # Global styles
│   │   ├── layout.tsx   # Root layout
│   │   ├── page.tsx     # Home page
│   │   ├── sitemap.ts   # Sitemap generation
│   │   └── robots.ts    # Robots.txt generation
│   └── components/
│       ├── layout/      # Layout components
│       │   ├── Navbar.tsx
│       │   └── Footer.tsx
│       ├── sections/    # Page sections
│       │   ├── Hero.tsx
│       │   ├── About.tsx
│       │   ├── Skills.tsx
│       │   ├── Experience.tsx
│       │   ├── Projects.tsx
│       │   └── Contact.tsx
│       └── ui/          # Reusable UI components
│           ├── AnimatedCounter.tsx
│           └── SectionHeading.tsx
├── tailwind.config.ts   # Tailwind configuration
├── tsconfig.json        # TypeScript configuration
├── next.config.js       # Next.js configuration
├── vercel.json          # Vercel deployment config
└── package.json         # Dependencies
```

## Performance

This portfolio is optimized for performance:

- **Lighthouse Score**: 90+ for Performance, Accessibility, Best Practices, SEO
- **Core Web Vitals**: Optimized LCP, FID, and CLS
- **Image Optimization**: Using Next.js Image component
- **Font Optimization**: Using next/font for self-hosted fonts

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the [MIT License](LICENSE).

## Contributing

Contributions, issues, and feature requests are welcome!

## Contact

Your Name - [your.email@example.com](mailto:your.email@example.com)

Project Link: [https://github.com/yourusername/portfolio](https://github.com/yourusername/portfolio)

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
