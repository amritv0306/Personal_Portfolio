import{a as n,p as o,b as c}from"./animations-6QaNm-nc.js";function p(t){t.innerHTML=`
    <div class="container" style="min-height: 80vh; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center;">
      <div class="section-tag">// 404</div>
      <h2 style="margin-top: var(--space-lg);">Project not found</h2>
      <p class="text-secondary" style="margin-top: var(--space-md);">The project you're looking for doesn't exist (yet).</p>
      <a href="/Personal_Portfolio/#projects" class="btn btn-primary" style="margin-top: var(--space-2xl);">← Back to portfolio</a>
    </div>
  `}function l(){const t=document.getElementById("app");if(!t)return;const i=new URLSearchParams(window.location.search).get("id"),a=n.find(e=>e.id===i);if(!a){p(t);return}document.title=`${a.title} — Amrit Verma`;const s="/Personal_Portfolio/";t.innerHTML=`
    <nav class="navbar">
      <div class="navbar-content container">
        <a href="${s}" class="navbar-logo" style="text-decoration: none; color: inherit;">AV</a>
        <ul class="navbar-nav">
          <li><a href="${s}#projects" class="nav-link">← All Projects</a></li>
          <li><a href="${s}#contact" class="nav-link">Contact</a></li>
        </ul>
      </div>
    </nav>

    <header class="section" style="padding-top: 140px; padding-bottom: var(--space-3xl);">
      <div class="container" style="max-width: 860px;">
        <div class="section-tag animate-fade-in-down">// CASE_STUDY</div>
        <h1 class="animate-fade-in-up" style="margin-top: var(--space-lg); line-height: var(--line-height-tight);">${a.title}</h1>
        <p class="text-secondary animate-fade-in-up" style="font-size: 1.2rem; margin-top: var(--space-lg);">${a.tagline}</p>

        <div class="animate-fade-in-up" style="display: flex; flex-wrap: wrap; gap: var(--space-md); margin-top: var(--space-xl); align-items: center;">
          <span class="skill-tag">${a.period}</span>
          <span class="skill-tag">${a.type}</span>
        </div>

        <div class="animate-fade-in-up" style="display: flex; flex-wrap: wrap; gap: var(--space-lg); margin-top: var(--space-2xl);">
          ${a.github?`<a href="${a.github}" target="_blank" class="btn btn-primary">View on GitHub</a>`:""}
          ${a.demo?`<a href="${a.demo}" target="_blank" class="btn btn-secondary">Watch Demo</a>`:""}
        </div>
      </div>
    </header>

    <section class="section" style="background-color: var(--color-bg-secondary); padding-top: var(--space-4xl);">
      <div class="container" style="max-width: 860px;">
        <div class="section-tag scroll-reveal">// OVERVIEW</div>
        ${a.overview.map(e=>`<p class="mt-lg scroll-reveal" style="font-size: 1.05rem; line-height: var(--line-height-relaxed);">${e}</p>`).join("")}

        <div class="section-tag scroll-reveal" style="margin-top: var(--space-4xl);">// KEY_FEATURES</div>
        <div class="grid-2 mt-lg" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: var(--space-lg);">
          ${a.features.map(e=>`
            <div class="card scroll-reveal" style="display: flex; gap: var(--space-md); align-items: flex-start;">
              <span style="color: var(--color-accent); font-weight: 700;">→</span>
              <p style="margin: 0;">${e}</p>
            </div>`).join("")}
        </div>

        <div class="section-tag scroll-reveal" style="margin-top: var(--space-4xl);">// HOW_IT_WORKS</div>
        <ol class="mt-lg" style="list-style: none; counter-reset: step; padding: 0;">
          ${a.howItWorks.map((e,r)=>`
            <li class="scroll-reveal" style="display: flex; gap: var(--space-lg); align-items: flex-start; margin-bottom: var(--space-lg);">
              <span style="font-family: var(--font-mono); color: var(--color-accent); font-weight: 700; min-width: 32px;">${String(r+1).padStart(2,"0")}</span>
              <p style="margin: 0; line-height: var(--line-height-normal);">${e}</p>
            </li>`).join("")}
        </ol>

        <div class="section-tag scroll-reveal" style="margin-top: var(--space-4xl);">// TECH_STACK</div>
        <div class="mt-lg scroll-reveal" style="display: flex; flex-wrap: wrap; gap: var(--space-sm);">
          ${a.skills.map(e=>`<span class="skill-tag">${e}</span>`).join("")}
        </div>

        <div class="scroll-reveal" style="margin-top: var(--space-4xl); padding-top: var(--space-2xl); border-top: 1px solid rgba(74, 158, 255, 0.12); display: flex; justify-content: space-between; flex-wrap: wrap; gap: var(--space-lg);">
          <a href="${s}#projects" class="project-link">← Back to all projects</a>
          <a href="mailto:${o.personal.email}" class="project-link">Discuss this project →</a>
        </div>
      </div>
    </section>

    <footer style="border-top: 1px solid rgba(255, 255, 255, 0.05); padding: 32px 0;">
      <div class="container" style="text-align: center;">
        <p class="text-tertiary" style="font-size: 0.9rem;">© ${new Date().getFullYear()} Amrit Verma</p>
      </div>
    </footer>
  `,c()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",l):l();
