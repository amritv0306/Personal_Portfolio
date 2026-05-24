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
      <div class="section-tag text-center scroll-reveal">// TECH_STACK</div>
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
    </div>
  `;

  skillsSection.innerHTML = skillsHTML;

  return skillsSection;
}
