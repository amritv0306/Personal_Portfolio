/* ============================================
   ABOUT SECTION COMPONENT
   ============================================ */

import { portfolioData } from '../data';

export function createAbout(): HTMLElement {
  const { personal, education } = portfolioData;

  const about = document.createElement('section');
  about.id = 'about';
  about.className = 'section';
  about.style.backgroundColor = 'var(--color-bg-secondary)';

  about.innerHTML = `
    <div class="container">
      <div class="section-inner">
        <div>
          <h2 class="scroll-reveal">About Me</h2>
          <p class="mt-xl scroll-reveal">
            ${personal.bio}
          </p>

          <div class="mt-2xl">
            <h4 class="mb-xl scroll-reveal">Quick Facts</h4>
            <ul style="list-style: none; display: grid; gap: 12px;">
              <li class="scroll-reveal">
                <strong style="color: var(--color-accent);">📍 Location:</strong>
                <span class="text-secondary"> ${personal.location}</span>
              </li>
              <li class="scroll-reveal">
                <strong style="color: var(--color-accent);">🎓 Education:</strong>
                <span class="text-secondary"> ${education[0].field} @ ${education[0].school.split(',')[0]}</span>
              </li>
              <li class="scroll-reveal">
                <strong style="color: var(--color-accent);">💼 Status:</strong>
                <span class="text-secondary"> Seeking internship opportunities</span>
              </li>
              <li class="scroll-reveal">
                <strong style="color: var(--color-accent);">⚡ Interests:</strong>
                <span class="text-secondary"> AI/ML, Full Stack Dev, Data Pipelines</span>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <h3 class="mb-2xl scroll-reveal">Featured Highlights</h3>
          <div class="grid-1 gap-lg">
            <div class="card scroll-reveal">
              <div style="font-size: 2.5rem; margin-bottom: 12px;">🚀</div>
              <h5 style="margin-bottom: 8px;">Fast Learner</h5>
              <p style="font-size: 0.9rem;">Quickly grasp new concepts and technologies. Built production systems in weeks.</p>
            </div>

            <div class="card scroll-reveal">
              <div style="font-size: 2.5rem; margin-bottom: 12px;">🔧</div>
              <h5 style="margin-bottom: 8px;">Full Stack</h5>
              <p style="font-size: 0.9rem;">Comfortable across the entire stack - frontend, backend, ML, and data engineering.</p>
            </div>

            <div class="card scroll-reveal">
              <div style="font-size: 2.5rem; margin-bottom: 12px;">🎯</div>
              <h5 style="margin-bottom: 8px;">Impact Driven</h5>
              <p style="font-size: 0.9rem;">Focus on building solutions that matter. Grew projects to 1000+ users.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  return about;
}

/* Add this CSS for grid-1 */
const style = document.createElement('style');
style.textContent = `
  .grid-1 {
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--space-lg);
  }
`;
document.head.appendChild(style);
