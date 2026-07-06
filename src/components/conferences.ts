/* ============================================
   CONFERENCES SECTION COMPONENT
   ============================================ */

import { portfolioData } from '../data';

export function createConferences(): HTMLElement {
  const { conferences } = portfolioData;

  const section = document.createElement('section');
  section.id = 'conferences';
  section.className = 'section';
  section.style.backgroundColor = 'var(--color-bg-secondary)';

  section.innerHTML = `
    <div class="container">
      <div class="section-tag text-center scroll-reveal">// CONFERENCES</div>
      <h2 class="text-center scroll-reveal mb-3xl">Conferences</h2>

      <div class="grid-auto" style="max-width: 1000px; margin: 0 auto;">
        ${conferences
          .map(
            (conf, idx) => `
          <div class="card scroll-reveal stagger-${Math.min(idx + 1, 10)}">
            <div style="display: flex; gap: 14px; align-items: flex-start; margin-bottom: 12px;">
              <span class="org-icon" data-monogram="${conf.monogram}">
                <img src="${import.meta.env.BASE_URL}logos/${conf.logo}" alt="${conf.organizer} logo" loading="lazy"
                     onerror="this.parentElement.classList.add('org-icon-fallback'); this.remove();" />
              </span>
              <div style="flex: 1; min-width: 0;">
                <div style="display: flex; justify-content: space-between; align-items: start; flex-wrap: wrap; gap: 8px;">
                  <h4 style="margin: 0;">${conf.name}</h4>
                  <span style="font-size: 0.85rem; color: var(--color-accent); white-space: nowrap;">${conf.period}</span>
                </div>
                <p style="margin: 4px 0 0 0; color: var(--color-text-secondary); font-weight: 600;">${conf.organizer}</p>
                <p style="margin: 2px 0 0 0; font-size: 0.9rem; color: var(--color-text-tertiary);">${conf.location}</p>
              </div>
            </div>

            <ul style="list-style: none; font-size: 0.9rem; padding: 0;">
              ${conf.highlights
                .map(
                  (h) => `<li style="margin-bottom: 8px;">
                    <span style="color: var(--color-accent); margin-right: 8px;">→</span>${h}
                  </li>`
                )
                .join('')}
            </ul>
          </div>
        `
          )
          .join('')}
      </div>
    </div>
  `;

  return section;
}
