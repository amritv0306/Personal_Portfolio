/* ============================================
   ABOUT SECTION COMPONENT
   ============================================ */

import { portfolioData } from '../data';

export function createAbout(): HTMLElement {
  const { personal } = portfolioData;

  const about = document.createElement('section');
  about.id = 'about';
  about.className = 'section';
  about.style.backgroundColor = 'var(--color-bg-secondary)';

  about.innerHTML = `
    <div class="container">
      <div class="section-inner">
        <div>
          <div class="section-tag scroll-reveal">// ABOUT_ME</div>
          <h2 class="scroll-reveal">A builder at the intersection of <span class="text-accent">engineering</span> and <span class="text-accent">intelligence</span>.</h2>

          <p class="mt-xl scroll-reveal">
            I'm an <strong>AI Engineer</strong> working in Bangalore, and a graduate of
            <strong>NIT Warangal</strong>. I build intelligent systems that move data,
            generate insight, and quietly do useful work in the background — with a focus
            on <strong>AI/ML</strong>, <strong>computer vision</strong>, and
            <strong>data engineering</strong>.
          </p>

          <p class="mt-lg scroll-reveal">
            I'm open to collaborating on any kind of cool project that has the potential
            to solve a real challenge. If you're building something interesting, let's talk.
          </p>

          <div class="mt-2xl">
            <div class="section-tag scroll-reveal">// QUICK_FACTS</div>
            <ul class="quick-facts mt-lg">
              <li class="scroll-reveal">
                <span class="fact-key">location</span>
                <span class="fact-val">${personal.location}</span>
              </li>
              <li class="scroll-reveal">
                <span class="fact-key">education</span>
                <span class="fact-val">B.Tech @ NIT Warangal</span>
              </li>
              <li class="scroll-reveal">
                <span class="fact-key">interests</span>
                <span class="fact-val">AI/ML · Computer Vision · GenAI · Robotics</span>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <div class="section-tag scroll-reveal">// HIGHLIGHTS</div>
          <div class="grid-1 gap-lg mt-lg">
            <div class="card highlight-card scroll-reveal">
              <div class="highlight-icon">🚀</div>
              <div>
                <h5>Fast Learner</h5>
                <p>Ship production code in weeks, not months.</p>
              </div>
            </div>

            <div class="card highlight-card scroll-reveal">
              <div class="highlight-icon">🎯</div>
              <div>
                <h5>Impact Driven</h5>
                <p>Grew a project to 1,000+ users in 30 days.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  return about;
}

const style = document.createElement('style');
style.textContent = `
  .grid-1 {
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--space-lg);
  }
`;
document.head.appendChild(style);
