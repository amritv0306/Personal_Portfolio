/* ============================================
   HERO SECTION COMPONENT
   ============================================ */

import { portfolioData } from '../data';
import { smoothScroll } from '../utils/animations';

export function createHero(): HTMLElement {
  const { personal } = portfolioData;

  const hero = document.createElement('section');
  hero.id = 'hero';
  hero.className = 'section hero';

  const titleParts = personal.title.split(' | ');

  hero.innerHTML = `
    <div class="hero-background">
      <div class="hero-grid"></div>
      <div class="hero-scanline"></div>
      <div class="hero-gradient-blob"></div>
      <div class="hero-gradient-blob blob-2"></div>
    </div>

    <div class="container hero-content">
      <div class="hero-avatar-wrapper animate-fade-in-down">
        <div class="hero-avatar-ring"></div>
        <div class="hero-avatar-ring ring-2"></div>
        <div class="hero-avatar">
          <img src="${import.meta.env.BASE_URL}profile.jpg" alt="${personal.name}" loading="eager" />
          <div class="hero-avatar-overlay"></div>
        </div>
        <div class="hero-avatar-status">
          <span class="status-dot"></span>
          <span class="status-text">ONLINE</span>
        </div>
      </div>

      <div class="hero-subtitle animate-fade-in-down">
        <span class="subtitle-bracket">[</span>
        <span class="subtitle-accent">◆</span>
        ${personal.location}
        <span class="subtitle-bracket">]</span>
      </div>

      <h1 class="hero-title">
        <div class="hero-name-wrapper">
          <span class="animate-fade-in-up stagger-1">${personal.name.split(' ')[0]}</span>
          <span class="animate-fade-in-up stagger-2">${personal.name.split(' ')[1]}</span>
        </div>
      </h1>

      <div class="hero-roles">
        ${titleParts
          .map(
            (role, idx) =>
              `<div class="role-badge animate-fade-in-up stagger-${Math.min(idx + 3, 10)}">${role}</div>`
          )
          .join('')}
      </div>

      <p class="hero-description animate-fade-in-up stagger-6">
        ${personal.bio}
      </p>

      <div class="hero-cta mt-3xl animate-fade-in-up stagger-7">
        <button class="btn btn-primary btn-lg" id="cta-projects">
          <span>View My Projects</span>
          <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" class="btn-icon">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </button>
        <a href="${personal.github}" target="_blank" class="btn btn-secondary btn-lg">
          <span>GitHub</span>
          <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" class="btn-icon">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
        </a>
      </div>

      <div class="scroll-cue">
        <svg width="24" height="24" fill="currentColor" class="scroll-cue-icon" viewBox="0 0 24 24">
          <path d="M12 21c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8zm0-14c-3.314 0-6 2.686-6 6s2.686 6 6 6 6-2.686 6-6-2.686-6-6-6zm0 8c-1.105 0-2-.895-2-2s.895-2 2-2 2 .895 2 2-.895 2-2 2z"/>
        </svg>
        <div class="scroll-text">Scroll to explore</div>
      </div>
    </div>
  `;

  const projectsBtn = hero.querySelector('#cta-projects');
  projectsBtn?.addEventListener('click', () => {
    smoothScroll('projects');
  });

  return hero;
}
