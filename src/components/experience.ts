/* ============================================
   EXPERIENCE SECTION COMPONENT
   ============================================ */

import { portfolioData } from '../data';

export function createExperience(): HTMLElement {
  const { experience, education } = portfolioData;

  const experienceSection = document.createElement('section');
  experienceSection.id = 'experience';
  experienceSection.className = 'section';

  let experienceHTML = `
    <div class="container">
      <h2 class="text-center scroll-reveal mb-3xl">Experience & Education</h2>

      <div style="max-width: 900px; margin: 0 auto;">
        <!-- Timeline -->
        <div style="position: relative; padding: 0 0 0 40px;">
          <!-- Timeline line -->
          <div style="position: absolute; left: 8px; top: 0; bottom: 0; width: 2px; background: linear-gradient(180deg, var(--color-accent), transparent);"></div>

          <!-- Education Timeline -->
          ${education
            .map(
              (edu, idx) => `
            <div class="timeline-item scroll-reveal" style="margin-bottom: 32px; position: relative;">
              <!-- Timeline dot -->
              <div style="position: absolute; left: -44px; top: 6px; width: 20px; height: 20px; background: var(--color-accent); border-radius: 50%; border: 3px solid var(--color-bg-primary); box-shadow: 0 0 0 4px var(--color-bg-secondary);"></div>

              <div class="card">
                <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 8px;">
                  <h4 style="margin: 0;">${edu.degree}</h4>
                  <span style="font-size: 0.85rem; color: var(--color-accent);">${edu.period}</span>
                </div>

                <p style="margin: 0 0 8px 0; color: var(--color-text-secondary);">${edu.school}</p>
                <p style="margin: 0 0 12px 0; font-size: 0.9rem; color: var(--color-text-secondary);">${edu.field} • GPA: ${edu.gpa}</p>

                <ul style="list-style: none; font-size: 0.9rem;">
                  ${edu.highlights.map((h) => `<li style="margin-bottom: 6px;">✓ ${h}</li>`).join('')}
                </ul>
              </div>
            </div>
          `
            )
            .join('')}

          <!-- Experience Timeline -->
          ${experience
            .map(
              (exp, idx) => `
            <div class="timeline-item scroll-reveal" style="margin-bottom: 32px; position: relative;">
              <!-- Timeline dot -->
              <div style="position: absolute; left: -44px; top: 6px; width: 20px; height: 20px; background: var(--color-accent); border-radius: 50%; border: 3px solid var(--color-bg-primary); box-shadow: 0 0 0 4px var(--color-bg-secondary);"></div>

              <div class="card">
                <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 8px;">
                  <h4 style="margin: 0;">${exp.title}</h4>
                  <span style="font-size: 0.85rem; color: var(--color-accent);">${exp.period}</span>
                </div>

                <p style="margin: 0 0 4px 0; color: var(--color-text-secondary); font-weight: 600;">${exp.company}</p>
                <p style="margin: 0 0 12px 0; font-size: 0.9rem; color: var(--color-text-tertiary);">${exp.location} • ${exp.type}</p>

                <ul style="list-style: none; font-size: 0.9rem; margin-bottom: 12px;">
                  ${exp.highlights.map((h) => `<li style="margin-bottom: 6px;">✓ ${h}</li>`).join('')}
                </ul>

                <div style="display: flex; flex-wrap: wrap; gap: 6px;">
                  ${exp.skills.map((skill) => `<span class="skill-tag" style="font-size: 0.75rem;">${skill}</span>`).join('')}
                </div>
              </div>
            </div>
          `
            )
            .join('')}
        </div>
      </div>
    </div>
  `;

  experienceSection.innerHTML = experienceHTML;

  return experienceSection;
}
