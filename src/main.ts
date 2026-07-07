/* ============================================
   MAIN APPLICATION ENTRY POINT
   ============================================ */

// Import styles
import './styles/main.css';
import './styles/animations.css';

// Import components
import { createNavbar } from './components/navbar';
import { createHero } from './components/hero';
import { createAbout } from './components/about';
import { createSkills } from './components/skills';
import { createProjects } from './components/projects';
import { createExperience } from './components/experience';
import { createConferences } from './components/conferences';
import { createCertifications } from './components/certifications';
import { createContact } from './components/contact';

// Import utilities
import {
  setupScrollReveal,
  observeElements,
  debounce,
  staggerAnimation,
  setupButtonFeedback,
} from './utils/animations';

/**
 * Initialize the application
 */
async function initApp(): Promise<void> {
  console.log('🚀 Initializing portfolio...');

  const app = document.getElementById('app');

  if (!app) {
    console.error('❌ App container not found');
    return;
  }

  try {
    // Clear existing content
    app.innerHTML = '';

    // Create main app container
    const appContainer = document.createElement('div');
    appContainer.className = 'app-container';

    // Add navbar
    appContainer.appendChild(createNavbar());

    // Add hero section
    appContainer.appendChild(createHero());

    // Add about section
    appContainer.appendChild(createAbout());

    // Add skills section
    appContainer.appendChild(createSkills());

    // Add projects section (async)
    const projectsSection = await createProjects();
    appContainer.appendChild(projectsSection);

    // Add experience section
    appContainer.appendChild(createExperience());

    // Add conferences section
    appContainer.appendChild(createConferences());

    // Add certifications section
    appContainer.appendChild(createCertifications());

    // Add contact section
    appContainer.appendChild(createContact());

    // Mount the app
    app.appendChild(appContainer);

    // Setup interactive features
    setupAnimations();
    setupScrollEffects();
    setupScrollProgress();

    console.log('✓ Portfolio initialized successfully');
  } catch (error) {
    console.error('❌ Failed to initialize portfolio:', error);
  }
}

/**
 * Setup all animations
 */
function setupAnimations(): void {
  // Setup scroll reveal animations
  setupScrollReveal();

  // Setup button feedback ripples
  setupButtonFeedback();

  // Setup stagger animations for elements
  const staggerElements = document.querySelectorAll('[class*="stagger-"]');
  const staggerArray = Array.from(staggerElements) as HTMLElement[];
  if (staggerArray.length > 0) {
    staggerAnimation(staggerArray, 'animate-fade-in-up', 50);
  }

  // Setup skill tag hover effects
  const skillTags = document.querySelectorAll('.skill-tag');
  skillTags.forEach((tag) => {
    tag.addEventListener('mouseenter', () => {
      (tag as HTMLElement).style.transform = 'scale(1.05)';
    });

    tag.addEventListener('mouseleave', () => {
      (tag as HTMLElement).style.transform = 'scale(1)';
    });
  });
}

/**
 * Setup scroll effects
 */
function setupScrollEffects(): void {
  // Navbar scroll effect
  const navbar = document.querySelector('.navbar');
  const updateNavbarStyle = debounce(() => {
    if (!navbar) return;

    const scrollTop = window.scrollY;
    const heroSection = document.querySelector('.hero');

    if (!heroSection) return;

    const heroHeight = heroSection.clientHeight;

    if (scrollTop > heroHeight * 0.5) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }, 10);

  window.addEventListener('scroll', updateNavbarStyle);

  // Active section highlighting
  observeElements('.section', (element, isVisible) => {
    if (isVisible) {
      const sectionId = (element as HTMLElement).id;
      const navLink = document.querySelector(`.navbar-nav a[href="#${sectionId}"]`);

      if (navLink) {
        document.querySelectorAll('.navbar-nav a').forEach((link) => {
          link.classList.remove('active');
        });
        navLink.classList.add('active');
      }
    }
  });
}

/**
 * Setup scroll progress indicator
 */
function setupScrollProgress(): void {
  const scrollIndicator = document.querySelector('.scroll-indicator');

  if (!scrollIndicator) return;

  const updateScrollProgress = debounce(() => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;

    (scrollIndicator as HTMLElement).style.width = `${scrollPercent}%`;
  }, 10);

  window.addEventListener('scroll', updateScrollProgress);
}

/**
 * Add CSS for scrolled navbar state
 */
function addScrolledNavbarStyle(): void {
  const style = document.createElement('style');
  style.textContent = `
    .navbar.scrolled {
      background: rgba(10, 10, 10, 0.8);
      border-bottom-color: rgba(74, 158, 255, 0.1);
    }

    .app-container {
      width: 100%;
    }

    /* Additional responsive adjustments */
    @media (max-width: 768px) {
      .navbar-nav {
        gap: 12px;
      }

      .navbar-nav a {
        font-size: 0.8rem;
      }

      .grid-2 {
        grid-template-columns: 1fr;
      }

      .grid-3 {
        grid-template-columns: 1fr;
      }
    }
  `;

  document.head.appendChild(style);
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}

// Add navbar scrolled styles on load
addScrolledNavbarStyle();

// Log portfolio info
console.log('%c✨ Amrit Verma Portfolio ✨', 'color: #4a9eff; font-size: 16px; font-weight: bold;');
console.log('%cBuilt with Vite + TypeScript + Modern CSS', 'color: #a0a0a0; font-size: 12px;');
