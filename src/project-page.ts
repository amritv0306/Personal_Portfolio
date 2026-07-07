/* ============================================
   PROJECT DETAIL PAGE ENTRY POINT
   Renders a full case study for a featured
   project, selected via ?id=<project-id>.
   ============================================ */

import './styles/main.css';
import './styles/animations.css';

import { projectDetails, portfolioData } from './data';
import { setupScrollReveal } from './utils/animations';

function renderNotFound(app: HTMLElement): void {
  app.innerHTML = `
    <div class="container" style="min-height: 80vh; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center;">
      <div class="section-tag">// 404</div>
      <h2 style="margin-top: var(--space-lg);">Project not found</h2>
      <p class="text-secondary" style="margin-top: var(--space-md);">The project you're looking for doesn't exist (yet).</p>
      <a href="${import.meta.env.BASE_URL}#projects" class="btn btn-primary" style="margin-top: var(--space-2xl);">← Back to portfolio</a>
    </div>
  `;
}

function initProjectPage(): void {
  const app = document.getElementById('app');
  if (!app) return;

  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  const project = projectDetails.find((p) => p.id === id);

  if (!project) {
    renderNotFound(app);
    return;
  }

  document.title = `${project.title} — Amrit Verma`;
  const home = import.meta.env.BASE_URL;

  app.innerHTML = `
    <nav class="navbar">
      <div class="navbar-content container">
        <a href="${home}" class="navbar-logo" style="text-decoration: none; color: inherit;">AV</a>
        <ul class="navbar-nav">
          <li><a href="${home}#projects" class="nav-link">← All Projects</a></li>
          <li><a href="${home}#contact" class="nav-link">Contact</a></li>
        </ul>
      </div>
    </nav>

    <header class="section" style="padding-top: 140px; padding-bottom: var(--space-3xl);">
      <div class="container" style="max-width: 860px;">
        <div class="section-tag animate-fade-in-down">// CASE_STUDY</div>
        <h1 class="animate-fade-in-up" style="margin-top: var(--space-lg); line-height: var(--line-height-tight);">${project.title}</h1>
        <p class="text-secondary animate-fade-in-up" style="font-size: 1.2rem; margin-top: var(--space-lg);">${project.tagline}</p>

        <div class="animate-fade-in-up" style="display: flex; flex-wrap: wrap; gap: var(--space-md); margin-top: var(--space-xl); align-items: center;">
          <span class="skill-tag">${project.period}</span>
          <span class="skill-tag">${project.type}</span>
        </div>

        <div class="animate-fade-in-up" style="display: flex; flex-wrap: wrap; gap: var(--space-lg); margin-top: var(--space-2xl);">
          ${project.github ? `<a href="${project.github}" target="_blank" class="btn btn-primary">View on GitHub</a>` : ''}
          ${project.demo ? `<a href="${project.demo}" target="_blank" class="btn btn-secondary">Watch Demo</a>` : ''}
        </div>
      </div>
    </header>

    <section class="section" style="background-color: var(--color-bg-secondary); padding-top: var(--space-4xl);">
      <div class="container" style="max-width: 860px;">
        <div class="section-tag scroll-reveal">// OVERVIEW</div>
        ${project.overview.map((p) => `<p class="mt-lg scroll-reveal" style="font-size: 1.05rem; line-height: var(--line-height-relaxed);">${p}</p>`).join('')}

        <div class="section-tag scroll-reveal" style="margin-top: var(--space-4xl);">// KEY_FEATURES</div>
        <div class="grid-2 mt-lg" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: var(--space-lg);">
          ${project.features
            .map(
              (f) => `
            <div class="card scroll-reveal" style="display: flex; gap: var(--space-md); align-items: flex-start;">
              <span style="color: var(--color-accent); font-weight: 700;">→</span>
              <p style="margin: 0;">${f}</p>
            </div>`
            )
            .join('')}
        </div>

        <div class="section-tag scroll-reveal" style="margin-top: var(--space-4xl);">// HOW_IT_WORKS</div>
        <ol class="mt-lg" style="list-style: none; counter-reset: step; padding: 0;">
          ${project.howItWorks
            .map(
              (step, i) => `
            <li class="scroll-reveal" style="display: flex; gap: var(--space-lg); align-items: flex-start; margin-bottom: var(--space-lg);">
              <span style="font-family: var(--font-mono); color: var(--color-accent); font-weight: 700; min-width: 32px;">${String(i + 1).padStart(2, '0')}</span>
              <p style="margin: 0; line-height: var(--line-height-normal);">${step}</p>
            </li>`
            )
            .join('')}
        </ol>

        <div class="section-tag scroll-reveal" style="margin-top: var(--space-4xl);">// TECH_STACK</div>
        <div class="mt-lg scroll-reveal" style="display: flex; flex-wrap: wrap; gap: var(--space-sm);">
          ${project.skills.map((s) => `<span class="skill-tag">${s}</span>`).join('')}
        </div>

        <div class="scroll-reveal" style="margin-top: var(--space-4xl); padding-top: var(--space-2xl); border-top: 1px solid rgba(74, 158, 255, 0.12); display: flex; justify-content: space-between; flex-wrap: wrap; gap: var(--space-lg);">
          <a href="${home}#projects" class="project-link">← Back to all projects</a>
          <a href="mailto:${portfolioData.personal.email}" class="project-link">Discuss this project →</a>
        </div>
      </div>
    </section>

    <footer style="border-top: 1px solid rgba(255, 255, 255, 0.05); padding: 32px 0;">
      <div class="container" style="text-align: center;">
        <p class="text-tertiary" style="font-size: 0.9rem;">© ${new Date().getFullYear()} Amrit Verma</p>
      </div>
    </footer>
  `;

  setupScrollReveal();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initProjectPage);
} else {
  initProjectPage();
}
