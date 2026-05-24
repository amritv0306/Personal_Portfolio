# Amrit Verma - Personal Portfolio

A premium, modern personal portfolio website built with **Vite**, **TypeScript**, and **CSS3**. Inspired by Apple, Linear, and Arc Browser aesthetics.

## 🎨 Design & Features

### Premium Aesthetic
- **Dark mode** with elegant color scheme
- Glassmorphism effects and smooth shadows
- Generous spacing and typography hierarchy
- Minimal, clean UI design

### Smooth Animations
- Fade-up reveals on scroll
- Staggered text animations
- Hover transitions and parallax effects
- Smooth page transitions
- Apple-style smooth interactions

### Responsive Design
- Mobile-first approach
- Seamless experience on desktop, tablet, and mobile
- Optimized for all screen sizes

### Dynamic Content
- **GitHub Integration**: Automatically fetches and displays your latest repositories
- Real resume and profile data
- Skills organized by category
- Experience timeline
- Project showcase with tech stacks

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ and npm/yarn
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/amritv0306/Personal_portfolio.git
cd Personal_portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

The portfolio will open at `http://localhost:3000`

## 📁 Project Structure

```
src/
├── components/          # React-style components
│   ├── navbar.ts       # Navigation component
│   ├── hero.ts         # Hero section
│   ├── about.ts        # About section
│   ├── skills.ts       # Skills showcase
│   ├── projects.ts     # Projects with GitHub integration
│   ├── experience.ts   # Timeline section
│   ├── certifications.ts# Certificates section
│   └── contact.ts      # Contact & footer
│
├── utils/
│   ├── animations.ts   # Animation utilities
│   ├── github.ts       # GitHub API integration
│   └── constants.ts    # App constants
│
├── styles/
│   ├── main.css        # Design system & components
│   ├── animations.css  # Keyframe animations
│   └── responsive.css  # Media queries
│
├── data.ts             # Portfolio data structure
└── main.ts             # Application entry point
```

## 🎯 Key Features

### 1. **GitHub Integration**
Automatically fetches your repositories and displays them with:
- Repository name and description
- Tech stack tags
- Star count
- Direct links to repositories
- Latest update information

### 2. **Smooth Animations**
- Scroll-triggered fade-up reveals
- Staggered element animations
- Parallax effects
- Hover interactions
- Smooth page transitions

### 3. **Responsive Components**
- Grid layouts that adapt to screen size
- Mobile-optimized navigation
- Touch-friendly interactions
- Optimized for all devices

### 4. **SEO Optimized**
- Semantic HTML
- Proper heading hierarchy
- Meta tags
- Accessibility features

## 🛠️ Development

### Build for Production

```bash
npm run build
```

This creates an optimized build in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## 📝 Customization

### Update Portfolio Data
Edit `src/data.ts` to update:
- Personal information
- Education
- Experience
- Projects
- Skills

### Modify Styles
- `src/styles/main.css` - Design system and components
- `src/styles/animations.css` - Animation definitions
- CSS variables are defined in `:root` for easy theming

### Add Sections
To add a new section:
1. Create a component in `src/components/`
2. Export a function that returns an `HTMLElement`
3. Import and add to `src/main.ts`

## 🚢 Deployment

### GitHub Pages

```bash
# Build the project
npm run build

# Deploy to GitHub Pages
npm run deploy
```

Configure in your GitHub repository settings:
- Set source to `gh-pages` branch
- Enable GitHub Pages

### Other Platforms
- **Vercel**: Connect your GitHub repository
- **Netlify**: Drag and drop the `dist/` folder
- **AWS S3**: Upload `dist/` contents

## 📊 Performance

- **Lightweight**: ~40KB gzipped (excluding dependencies)
- **Fast Load Time**: Optimized CSS and minimal JavaScript
- **GPU-Accelerated**: Animations use transforms and opacity
- **Lazy Loading**: Images and components load as needed

## 🎓 Technologies

- **Build Tool**: Vite 5
- **Language**: TypeScript 5
- **Styling**: Modern CSS (Grid, Flexbox, Custom Properties)
- **APIs**: GitHub REST API
- **Browser APIs**: Intersection Observer, Fetch API

## 📱 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔧 Configuration

### Vite Config
- `vite.config.ts` - Vite build configuration
- `tsconfig.json` - TypeScript configuration
- `package.json` - Dependencies and scripts

### Environment Variables
Currently uses public GitHub API (no auth required for public data).

## 📈 Future Enhancements

- [ ] Blog section with markdown support
- [ ] Dark/Light mode toggle
- [ ] Search functionality
- [ ] Contact form with email integration
- [ ] Analytics integration
- [ ] Multi-language support
- [ ] Comments section

## 🐛 Troubleshooting

### GitHub Projects Not Showing
- Check your GitHub username is correct in `src/data.ts`
- Ensure repositories are public
- Check browser console for API errors

### Styles Not Loading
- Clear browser cache (Ctrl+Shift+R)
- Rebuild the project (`npm run build`)

### Animations Not Smooth
- Check browser performance settings
- Ensure browser has GPU acceleration enabled
- Try reducing animation complexity

## 📧 Contact

**Amrit Verma**
- Email: amritishoney@gmail.com
- GitHub: [@amritv0306](https://github.com/amritv0306)
- LinkedIn: [amritverma](https://linkedin.com/in/amritverma)

## 📄 License

MIT License - feel free to use this as a template for your own portfolio!

---

**Built with ❤️ using Vite, TypeScript & Modern CSS**

Last Updated: May 2025
