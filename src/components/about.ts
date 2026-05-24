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
          <div class="section-tag scroll-reveal">// ABOUT_ME</div>
          <h2 class="scroll-reveal">A builder at the intersection of <span class="text-accent">engineering</span> and <span class="text-accent">intelligence</span>.</h2>

          <p class="mt-xl scroll-reveal">
            I'm a Chemical Engineering undergrad at NIT Warangal who fell in love with code,
            and now I split my time between solving classical engineering problems and shipping
            modern software. My focus sits where <strong>full-stack development</strong>,
            <strong>AI/ML</strong>, and <strong>data engineering</strong> overlap — building
            tools that move data, generate insight, and quietly do useful work in the background.
          </p>

          <p class="mt-lg scroll-reveal">
            Recently, I designed an end-to-end ETL + GenAI pipeline on GCP that grew a content
            channel past 1,000 viewers in a month, built a 90%-accurate fake news classifier
            with NLTK and spaCy, and shipped a Flask-based job portal during a Python developer
            internship. I care about clean architecture, fast feedback loops, and code that
            other people can actually read.
          </p>

          <p class="mt-lg scroll-reveal">
            Right now I'm looking for internships and collaborations where I can keep learning
            in the open — especially around applied ML, generative AI, and data platforms.
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
                <span class="fact-val">${education[0].field} @ ${education[0].school.split(',')[0]}</span>
              </li>
              <li class="scroll-reveal">
                <span class="fact-key">status</span>
                <span class="fact-val">Open to internships</span>
              </li>
              <li class="scroll-reveal">
                <span class="fact-key">interests</span>
                <span class="fact-val">AI/ML · Full Stack · Data Pipelines</span>
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
