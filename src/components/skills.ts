/* ============================================
   SKILLS SECTION COMPONENT
   ============================================ */

import { portfolioData, SKILL_CATEGORIES } from '../data';

export function createSkills(): HTMLElement {
  const { skills } = portfolioData;

  const skillsSection = document.createElement('section');
  skillsSection.id = 'skills';
  skillsSection.className = 'section';

  let skillsHTML = `
    <div class="container">
      <h2 class="text-center scroll-reveal mb-3xl">Technical Skills</h2>

      <div class="grid-3">
  `;

  SKILL_CATEGORIES.forEach((category, idx) => {
    const categorySkills = (skills as any)[category.key];

    skillsHTML += `
      <div class="card scroll-reveal stagger-${Math.min(idx + 1, 10)}">
        <h4 style="margin-bottom: 16px; color: ${category.color};">${category.name}</h4>
        <div style="display: flex; flex-wrap: wrap; gap: 8px;">
          ${categorySkills
            .map(
              (skill: string, skillIdx: number) =>
                `<span class="skill-tag stagger-${Math.min(skillIdx + 1, 5)}">${skill}</span>`
            )
            .join('')}
        </div>
      </div>
    `;
  });

  skillsHTML += `
      </div>

      <div class="mt-4xl">
        <h3 class="text-center scroll-reveal mb-2xl">Proficiency Levels</h3>
        <div class="grid-2">
          <div class="scroll-reveal">
            <h5 style="margin-bottom: 12px;">Expert</h5>
            <p class="text-secondary">Python, JavaScript/TypeScript, React, Flask, SQL, Git</p>
          </div>

          <div class="scroll-reveal">
            <h5 style="margin-bottom: 12px;">Intermediate</h5>
            <p class="text-secondary">Machine Learning, NLP, GCP, Data Engineering, CSS/HTML</p>
          </div>

          <div class="scroll-reveal">
            <h5 style="margin-bottom: 12px;">Familiar</h5>
            <p class="text-secondary">Vite, Tailwind, Docker, Jupyter Notebooks, GenAI APIs</p>
          </div>

          <div class="scroll-reveal">
            <h5 style="margin-bottom: 12px;">Learning</h5>
            <p class="text-secondary">Advanced ML ops, Cloud Architecture, System Design</p>
          </div>
        </div>
      </div>
    </div>
  `;

  skillsSection.innerHTML = skillsHTML;

  return skillsSection;
}
