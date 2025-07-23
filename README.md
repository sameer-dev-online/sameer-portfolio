# Modern Portfolio Website

A contemporary, responsive portfolio website built with Next.js 15, TypeScript, and Tailwind CSS. Features modern design principles, smooth animations, and exceptional user experience.

## ✨ Features

### 🎨 Modern Design System
- **Dark/Light Mode Toggle** - Seamless theme switching with system preference detection
- **Contemporary Color Palette** - Carefully crafted color scheme with CSS custom properties
- **Typography Scale** - Modern font hierarchy using Geist Sans and Geist Mono
- **Gradient Backgrounds** - Beautiful gradient overlays and text effects
- **Glass Morphism** - Subtle backdrop blur effects for modern aesthetics

### 🚀 Performance & Accessibility
- **Next.js 15** - Latest features including Turbopack for faster development
- **TypeScript** - Full type safety and better developer experience
- **Responsive Design** - Mobile-first approach with perfect cross-device compatibility
- **SEO Optimized** - Comprehensive meta tags, Open Graph, and Twitter Cards
- **WCAG Compliant** - Accessibility features including proper ARIA labels and keyboard navigation
- **Smooth Animations** - Framer Motion powered micro-interactions and page transitions

### 🧭 Navigation & UX
- **Sticky Navigation** - Smart navigation bar with scroll detection
- **Active Section Highlighting** - Visual indication of current page section
- **Smooth Scrolling** - Seamless navigation between sections
- **Mobile Menu** - Responsive hamburger menu with animations
- **Scroll Progress Indicator** - Visual progress bar showing page scroll position

### 📱 Sections & Components
- **Hero Section** - Compelling introduction with animated background and CTAs
- **About Section** - Personal introduction with key highlights
- **Skills Section** - Interactive skill showcase with progress indicators
- **Projects Section** - Featured work with hover effects and technology tags
- **Contact Section** - Functional contact form with validation and social links
- **Footer** - Comprehensive footer with navigation and social media links

## 🛠️ Tech Stack

- **Framework**: Next.js 15.4.2
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Fonts**: Geist Sans & Geist Mono
- **Icons**: Custom SVG icons
- **Development**: Turbopack for fast refresh

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/sameer-dev-online/sameer-portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles and CSS variables
│   ├── layout.tsx         # Root layout with metadata
│   └── page.tsx           # Main page component
├── components/            # Reusable components
│   ├── AboutSection.tsx   # About section with personal info
│   ├── ContactSection.tsx # Contact form with validation
│   ├── Footer.tsx         # Footer with links and social media
│   ├── HomeSection.tsx    # Hero section with animations
│   ├── LoadingSpinner.tsx # Loading states and skeletons
│   ├── Navigation.tsx     # Main navigation component
│   ├── ProjectsSection.tsx# Projects showcase
│   ├── SkillsSection.tsx  # Skills with progress indicators
│   ├── ThemeProvider.tsx  # Theme context provider
│   └── ThemeToggle.tsx    # Dark/light mode toggle
└── public/                # Static assets
```

## 🎨 Customization

### Theme Colors
Edit the CSS custom properties in `src/app/globals.css`:

```css
:root {
  --primary: #3b82f6;        /* Primary brand color */
  --secondary: #f1f5f9;      /* Secondary color */
  --background: #ffffff;     /* Background color */
  --foreground: #0f172a;     /* Text color */
  /* ... more variables */
}
```

### Content Updates
- **Personal Information**: Update `src/components/HomeSection.tsx` and `src/components/AboutSection.tsx`
- **Skills**: Modify the skills array in `src/components/SkillsSection.tsx`
- **Projects**: Update the projects array in `src/components/ProjectsSection.tsx`
- **Contact Info**: Edit contact details in `src/components/ContactSection.tsx`
- **Social Links**: Update social media links in `src/components/Footer.tsx`

### Metadata & SEO
Update SEO information in `src/app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: "Your Name | Your Title",
  description: "Your description",
  // ... other metadata
}
```

## 📱 Responsive Design

The portfolio is built with a mobile-first approach and includes:
- **Mobile**: Optimized for phones (320px+)
- **Tablet**: Enhanced layout for tablets (768px+)
- **Desktop**: Full-featured desktop experience (1024px+)
- **Large Screens**: Optimized for large displays (1280px+)

## 🔧 Development Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy automatically on every push

### Other Platforms
The portfolio can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React framework for production
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) - A production-ready motion library for React
- [Vercel](https://vercel.com/) - Platform for frontend frameworks and static sites

---

**Built with ❤️ by [Sameer Dev](https://github.com/sameer-dev-online)**
