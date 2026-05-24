/* ============================================
   PROJECTS SECTION COMPONENT
   ============================================ */

import { portfolioData } from '../data';
import { fetchGitHubRepos, sortRepos, GitHubRepo } from '../utils/github';

export async function createProjects(): Promise<HTMLElement> {
  const { projects: portfolioProjects } = portfolioData;

  const projectsSection = document.createElement('section');
  projectsSection.id = 'projects';
  projectsSection.className = 'section';
  projectsSection.style.backgroundColor = 'var(--color-bg-secondary)';

  // Start with portfolio projects
  projectsSection.innerHTML = `
    <div class="container">
      <h2 class="text-center scroll-reveal mb-3xl">Featured Projects</h2>

      <div class="grid-auto" id="projects-grid">
        ${portfolioProjects
          .map(
            (project, idx) => `
          <div class="card project-card scroll-reveal stagger-${Math.min(idx + 1, 10)}">
            <div style="margin-bottom: 12px; height: 100px; background: linear-gradient(135deg, rgba(0,217,255,0.1), rgba(0,217,255,0.05)); border-radius: 8px; display: flex; align-items: center; justify-content: center;">
              <div style="font-size: 2.5rem;">💡</div>
            </div>

            <h4 style="margin-bottom: 8px;">${project.title}</h4>
            <p class="text-secondary" style="margin-bottom: 12px; font-size: 0.9rem;">${project.description}</p>

            <div style="margin-bottom: 12px; font-size: 0.8rem; color: var(--color-text-tertiary);">
              ${project.period} • ${project.type}
            </div>

            <div style="display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 12px;">
              ${project.skills
                .slice(0, 4)
                .map((skill) => `<span class="skill-tag" style="font-size: 0.75rem;">${skill}</span>`)
                .join('')}
            </div>

            <ul style="list-style: none; font-size: 0.9rem; color: var(--color-text-secondary); margin-bottom: 12px;">
              ${project.highlights
                .slice(0, 2)
                .map((h) => `<li style="margin-bottom: 6px;">✓ ${h}</li>`)
                .join('')}
            </ul>

            ${
              project.github
                ? `<a href="${project.github}" target="_blank" class="text-accent" style="font-weight: 600;">View on GitHub →</a>`
                : `<span class="text-tertiary" style="font-size: 0.9rem;">GitHub link coming soon</span>`
            }
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
        <div style="margin-top: 48px;">
          <h3 class="scroll-reveal mb-2xl">Latest GitHub Projects</h3>
          <div class="grid-auto" style="gap: 16px;">
            ${sortedRepos
              .map(
                (repo, idx) => `
              <div class="card project-card scroll-reveal stagger-${Math.min(idx + 1, 6)}">
                <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 12px;">
                  <h5>${repo.name}</h5>
                  ${
                    repo.stars > 0
                      ? `<span class="skill-tag" style="font-size: 0.75rem;">⭐ ${repo.stars}</span>`
                      : ''
                  }
                </div>

                <p class="text-secondary" style="font-size: 0.9rem; margin-bottom: 12px; line-height: 1.5;">
                  ${repo.description || 'No description'}
                </p>

                <div style="display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 12px;">
                  ${
                    repo.language
                      ? `<span class="skill-tag" style="font-size: 0.75rem;">${repo.language}</span>`
                      : ''
                  }
                  ${repo.topics
                    .slice(0, 2)
                    .map((topic) => `<span class="skill-tag" style="font-size: 0.75rem;">${topic}</span>`)
                    .join('')}
                </div>

                <a href="${repo.url}" target="_blank" class="text-accent" style="font-weight: 600; font-size: 0.9rem;">
                  View Repository →
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
