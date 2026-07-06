/* ============================================
   CERTIFICATIONS SECTION COMPONENT
   ============================================ */

import { portfolioData } from '../data';

export function createCertifications(): HTMLElement {
  const { certifications } = portfolioData;

  const certificationsSection = document.createElement('section');
  certificationsSection.id = 'certifications';
  certificationsSection.className = 'section';

  certificationsSection.innerHTML = `
    <div class="container">
      <div class="section-tag text-center scroll-reveal">// CERTIFICATIONS</div>
      <h2 class="text-center scroll-reveal mb-3xl">Certifications</h2>

      <div class="grid-3">
        ${certifications
          .map(
            (cert, idx) => `
          <a href="${import.meta.env.BASE_URL}certificates/${cert.file}" target="_blank" rel="noopener"
             class="card scroll-reveal stagger-${Math.min(idx + 1, 10)}"
             style="text-decoration: none; color: inherit; display: flex; flex-direction: column; gap: 8px;">
            <div style="font-size: 1.75rem;">📜</div>
            <h5 style="margin: 0; line-height: 1.35;">${cert.name}</h5>
            <p class="text-secondary" style="margin: 0; font-size: 0.88rem;">${cert.issuer}</p>
            <p style="margin: 0; font-size: 0.82rem; color: var(--color-accent);">Issued ${cert.date}</p>
            <span class="project-link" style="margin-top: auto; font-size: 0.85rem;">View certificate →</span>
          </a>
        `
          )
          .join('')}
      </div>
    </div>
  `;

  return certificationsSection;
}
