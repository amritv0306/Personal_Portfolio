/* ============================================
   PROJECTS SECTION COMPONENT
   ============================================ */

import { portfolioData } from '../data';
import { fetchGitHubRepos, sortRepos } from '../utils/github';

export async function createProjects(): Promise<HTMLElement> {
  const { projects: portfolioProjects } = portfolioData;

  const projectsSection = document.createElement('section');
  projectsSection.id = 'projects';
  projectsSection.className = 'section';
  projectsSection.style.backgroundColor = 'var(--color-bg-secondary)';

  // Start with portfolio projects
  projectsSection.innerHTML = `
    <div class="container">
      <div class="section-header scroll-reveal">
        <h2 class="text-center">Featured Projects</h2>
        <p class="text-center text-secondary" style="margin-top: var(--space-md); font-size: 1.05rem;">
          Showcase of my most impactful work combining technical excellence with real-world impact
        </p>
      </div>

      <div class="grid-auto" id="projects-grid" style="margin-bottom: var(--space-4xl);">
        ${portfolioProjects
          .map(
            (project, idx) => `
          <div class="card project-card scroll-reveal stagger-${Math.min(idx + 1, 10)}">
            <div class="project-icon" style="margin-bottom: var(--space-lg);">
              <div style="font-size: 2.5rem;">💡</div>
            </div>

            <div style="flex: 1;">
              <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: var(--space-sm);">
                <h4 style="margin: 0;">${project.title}</h4>
              </div>

              <div style="display: flex; flex-wrap: wrap; gap: var(--space-sm); margin-bottom: var(--space-md);">
                <span style="font-size: var(--body-xs); color: var(--color-text-tertiary); font-weight: 500;">${project.period}</span>
                <span style="font-size: var(--body-xs); color: var(--color-text-tertiary);">•</span>
                <span style="font-size: var(--body-xs); color: var(--color-text-tertiary);">${project.type}</span>
              </div>

              <p class="text-secondary" style="margin-bottom: var(--space-lg); line-height: 1.6;">${project.description}</p>

              <div style="margin-bottom: var(--space-lg);">
                <div style="display: flex; flex-wrap: wrap; gap: var(--space-sm);">
                  ${project.skills
                    .slice(0, 5)
                    .map((skill) => `<span class="skill-tag">${skill}</span>`)
                    .join('')}
                </div>
              </div>

              <ul style="list-style: none; font-size: 0.9rem; color: var(--color-text-secondary); margin-bottom: var(--space-lg); padding: 0;">
                ${project.highlights
                  .slice(0, 3)
                  .map((h) => `<li style="margin-bottom: var(--space-sm);">
                    <span style="color: var(--color-accent); margin-right: var(--space-sm);">→</span>${h}
                  </li>`)
                  .join('')}
              </ul>
            </div>

            <div style="margin-top: var(--space-lg); padding-top: var(--space-lg); border-top: 1px solid rgba(0, 217, 255, 0.1);">
              ${
                project.github
                  ? `<a href="${project.github}" target="_blank" class="project-link">View on GitHub <span style="margin-left: 4px;">→</span></a>`
                  : `<span class="text-tertiary" style="font-size: 0.9rem;">Repository coming soon</span>`
              }
            </div>
          </div>
        `
          )
          .join('')}
      </div>

      <div id="github-projects-container"></div>

      <div style="text-align: center; margin-top: 48px;">
        <p class="text-secondary scroll-reveal">More projects on <a href="https://github.com/amritv0306" target="_blank" style="color: var(--color-accent);">GitHub →</a></p>
      </div>
    </div>
  `;

  // Fetch and add GitHub repos
  const githubRepos = await fetchGitHubRepos('amritv0306');
  if (githubRepos.length > 0) {
    const sortedRepos = sortRepos(githubRepos, 'updated').slice(0, 6);
    const githubContainer = projectsSection.querySelector('#github-projects-container');

    if (githubContainer) {
      const githubHTML = `
        <div style="margin-top: var(--space-4xl); border-top: 2px solid rgba(0, 217, 255, 0.1); padding-top: var(--space-4xl);">
          <div class="scroll-reveal" style="margin-bottom: var(--space-3xl);">
            <h3>Latest GitHub Projects</h3>
            <p class="text-secondary" style="margin-top: var(--space-md); font-size: 1rem;">
              Recent work spanning full stack development, data engineering, and machine learning
            </p>
          </div>

          <div class="grid-auto">
            ${sortedRepos
              .map(
                (repo, idx) => `
              <div class="card project-card scroll-reveal stagger-${Math.min(idx + 1, 6)}">
                <div style="margin-bottom: var(--space-lg);">
                  <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: var(--space-md);">
                    <h5 style="margin: 0;">${repo.name}</h5>
                    ${
                      repo.stars > 0
                        ? `<span class="skill-tag" style="font-size: 0.75rem; font-weight: 600;">⭐ ${repo.stars}</span>`
                        : ''
                    }
                  </div>

                  <p class="text-secondary" style="margin: 0; line-height: 1.6;">
                    ${repo.description || 'Repository'}
                  </p>
                </div>

                <div style="display: flex; flex-wrap: wrap; gap: var(--space-sm); margin-bottom: var(--space-lg);">
                  ${
                    repo.language
                      ? `<span class="skill-tag" style="font-size: 0.75rem;">${repo.language}</span>`
                      : ''
                  }
                  ${repo.topics
                    .slice(0, 3)
                    .map((topic) => `<span class="skill-tag" style="font-size: 0.75rem;">${topic}</span>`)
                    .join('')}
                </div>

                <a href="${repo.url}" target="_blank" class="project-link">
                  View Repository <span style="margin-left: 4px;">→</span>
                </a>
              </div>
            `
              )
              .join('')}
          </div>
        </div>
      `;

      githubContainer.innerHTML = githubHTML;
    }
  }

  return projectsSection;
}
