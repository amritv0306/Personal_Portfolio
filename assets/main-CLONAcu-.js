import{p as o,c as m,S as h,b as f,s as u,e as y,o as b,d as p}from"./animations-6QaNm-nc.js";import{f as x,s as w}from"./github-api-Bo0WLo2o.js";function $(){const a=document.createElement("nav");return a.className="navbar",a.innerHTML=`
    <div class="navbar-content container">
      <div class="navbar-logo">AV</div>
      <ul class="navbar-nav">
        <li><a href="#hero" class="nav-link">Home</a></li>
        <li><a href="#about" class="nav-link">About</a></li>
        <li><a href="#skills" class="nav-link">Skills</a></li>
        <li><a href="#projects" class="nav-link">Projects</a></li>
        <li><a href="#experience" class="nav-link">Experience</a></li>
        <li><a href="#conferences" class="nav-link">Conferences</a></li>
        <li><a href="#contact" class="nav-link">Contact</a></li>
      </ul>
    </div>
  `,k(a),E(),a}function k(a){let e=0;window.addEventListener("scroll",()=>{const t=window.scrollY;t>e&&t>100?a.classList.add("hidden"):a.classList.remove("hidden"),e=t})}function E(){document.querySelectorAll(".navbar-nav a").forEach(e=>{e.addEventListener("click",t=>{t.preventDefault();const s=e.getAttribute("href");if(s&&s.startsWith("#")){const i=s.substring(1),n=document.getElementById(i);n&&(c(e),n.scrollIntoView({behavior:"smooth"}))}}),window.addEventListener("scroll",()=>{const t=e.getAttribute("href");if(t&&t.startsWith("#")){const s=t.substring(1),i=document.getElementById(s);if(i){const n=i.getBoundingClientRect();n.top<=100&&n.bottom>=100&&c(e)}}})})}function c(a){document.querySelectorAll(".navbar-nav a").forEach(e=>{e.classList.remove("active")}),a.classList.add("active")}function S(){const{personal:a}=o,e=document.createElement("section");e.id="hero",e.className="section hero";const t=a.title.split(" | ");e.innerHTML=`
    <div class="hero-background">
      <div class="hero-grid"></div>
      <div class="hero-scanline"></div>
      <div class="hero-gradient-blob"></div>
      <div class="hero-gradient-blob blob-2"></div>
    </div>

    <div class="container hero-content">
      <div class="hero-avatar-wrapper animate-fade-in-down">
        <div class="hero-avatar-ring"></div>
        <div class="hero-avatar-ring ring-2"></div>
        <div class="hero-avatar">
          <img src="/Personal_Portfolio/profile.jpg" alt="${a.name}" loading="eager" />
          <div class="hero-avatar-overlay"></div>
        </div>
      </div>

      <div class="hero-subtitle animate-fade-in-down">
        <span class="subtitle-bracket">[</span>
        <span class="subtitle-accent">◆</span>
        ${a.location}
        <span class="subtitle-bracket">]</span>
      </div>

      <h1 class="hero-title">
        <div class="hero-name-wrapper">
          <span class="animate-fade-in-up stagger-1">${a.name.split(" ")[0]}</span>
          <span class="animate-fade-in-up stagger-2">${a.name.split(" ")[1]}</span>
        </div>
      </h1>

      <div class="hero-roles">
        ${t.map((i,n)=>`<div class="role-badge animate-fade-in-up stagger-${Math.min(n+3,10)}">${i}</div>`).join("")}
      </div>

      <p class="hero-description animate-fade-in-up stagger-6">
        ${a.bio}
      </p>

      <div class="hero-cta mt-3xl animate-fade-in-up stagger-7">
        <button class="btn btn-primary btn-lg" id="cta-projects">
          <span>View My Projects</span>
          <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" class="btn-icon">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </button>
        <a href="${a.github}" target="_blank" class="btn btn-secondary btn-lg">
          <span>GitHub</span>
          <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" class="btn-icon">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
        </a>
      </div>

      <div class="scroll-cue">
        <svg width="24" height="24" fill="currentColor" class="scroll-cue-icon" viewBox="0 0 24 24">
          <path d="M12 21c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8zm0-14c-3.314 0-6 2.686-6 6s2.686 6 6 6 6-2.686 6-6-2.686-6-6-6zm0 8c-1.105 0-2-.895-2-2s.895-2 2-2 2 .895 2 2-.895 2-2 2z"/>
        </svg>
        <div class="scroll-text">Scroll to explore</div>
      </div>
    </div>
  `;const s=e.querySelector("#cta-projects");return s==null||s.addEventListener("click",()=>{m("projects")}),e}function C(){const{personal:a}=o,e=document.createElement("section");return e.id="about",e.className="section",e.style.backgroundColor="var(--color-bg-secondary)",e.innerHTML=`
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
                <span class="fact-val">${a.location}</span>
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
  `,e}const v=document.createElement("style");v.textContent=`
  .grid-1 {
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--space-lg);
  }
`;document.head.appendChild(v);function L(){const{skills:a}=o,e=document.createElement("section");e.id="skills",e.className="section";let t=`
    <div class="container">
      <div class="section-tag text-center scroll-reveal">// TECH_STACK</div>
      <h2 class="text-center scroll-reveal mb-3xl">Technical Skills</h2>

      <div class="grid-3">
  `;return h.forEach((s,i)=>{const n=a[s.key];t+=`
      <div class="card scroll-reveal stagger-${Math.min(i+1,10)}">
        <h4 style="margin-bottom: 16px; color: ${s.color};">${s.name}</h4>
        <div style="display: flex; flex-wrap: wrap; gap: 8px;">
          ${n.map((l,r)=>`<span class="skill-tag stagger-${Math.min(r+1,5)}">${l}</span>`).join("")}
        </div>
      </div>
    `}),t+=`
      </div>
    </div>
  `,e.innerHTML=t,e}async function z(){const{projects:a}=o,e=document.createElement("section");e.id="projects",e.className="section",e.style.backgroundColor="var(--color-bg-secondary)",e.innerHTML=`
    <div class="container">
      <div class="section-header scroll-reveal">
        <h2 class="text-center">Featured Projects</h2>
        <p class="text-center text-secondary" style="margin-top: var(--space-md); font-size: 1.05rem;">
          Showcase of my most impactful work combining technical excellence with real-world impact
        </p>
      </div>

      <div class="grid-auto" id="projects-grid" style="margin-bottom: var(--space-4xl);">
        ${a.map((s,i)=>`
          <div class="card project-card featured-project scroll-reveal stagger-${Math.min(i+1,10)}" data-project-id="${s.id}" style="cursor: pointer;">
            <div class="project-icon" style="margin-bottom: var(--space-lg);">
              <div style="font-size: 2.5rem;">${s.id==="invisible-magic"?"🪞":"💡"}</div>
            </div>

            <div style="flex: 1;">
              <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: var(--space-sm);">
                <h4 style="margin: 0;">${s.title}</h4>
              </div>

              <div style="display: flex; flex-wrap: wrap; gap: var(--space-sm); margin-bottom: var(--space-md);">
                <span style="font-size: var(--body-xs); color: var(--color-text-tertiary); font-weight: 500;">${s.period}</span>
                <span style="font-size: var(--body-xs); color: var(--color-text-tertiary);">•</span>
                <span style="font-size: var(--body-xs); color: var(--color-text-tertiary);">${s.type}</span>
              </div>

              <p class="text-secondary" style="margin-bottom: var(--space-lg); line-height: 1.6;">${s.description}</p>

              <div style="margin-bottom: var(--space-lg);">
                <div style="display: flex; flex-wrap: wrap; gap: var(--space-sm);">
                  ${s.skills.slice(0,5).map(n=>`<span class="skill-tag">${n}</span>`).join("")}
                </div>
              </div>

              <ul style="list-style: none; font-size: 0.9rem; color: var(--color-text-secondary); margin-bottom: var(--space-lg); padding: 0;">
                ${s.highlights.slice(0,3).map(n=>`<li style="margin-bottom: var(--space-sm);">
                    <span style="color: var(--color-accent); margin-right: var(--space-sm);">→</span>${n}
                  </li>`).join("")}
              </ul>
            </div>

            <div style="margin-top: var(--space-lg); padding-top: var(--space-lg); border-top: 1px solid rgba(74, 158, 255, 0.12); display: flex; gap: var(--space-xl); flex-wrap: wrap;">
              <a href="/Personal_Portfolio/project.html?id=${s.id}" class="project-link">Read case study <span style="margin-left: 4px;">→</span></a>
              ${s.github?`<a href="${s.github}" target="_blank" class="project-link" onclick="event.stopPropagation()">View on GitHub <span style="margin-left: 4px;">→</span></a>`:""}
            </div>
          </div>
        `).join("")}
      </div>

      <div id="github-projects-container"></div>

      <div style="text-align: center; margin-top: 48px;">
        <p class="text-secondary scroll-reveal">More projects on <a href="https://github.com/amritv0306" target="_blank" style="color: var(--color-accent);">GitHub →</a></p>
      </div>
    </div>
  `,e.querySelectorAll(".featured-project").forEach(s=>{s.addEventListener("click",i=>{if(i.target.closest("a"))return;const n=s.dataset.projectId;n&&(window.location.href=`/Personal_Portfolio/project.html?id=${n}`)})});const t=await x("amritv0306");if(t.length>0){const s=w(t,"updated").slice(0,6),i=e.querySelector("#github-projects-container");if(i){const n=`
        <div style="margin-top: var(--space-4xl); border-top: 2px solid rgba(74, 158, 255, 0.1); padding-top: var(--space-4xl);">
          <div class="scroll-reveal" style="margin-bottom: var(--space-3xl);">
            <h3>Latest GitHub Projects</h3>
            <p class="text-secondary" style="margin-top: var(--space-md); font-size: 1rem;">
              Recent work spanning full stack development, data engineering, and machine learning
            </p>
          </div>

          <div class="grid-auto">
            ${s.map((l,r)=>`
              <div class="card project-card scroll-reveal stagger-${Math.min(r+1,6)}">
                <div style="margin-bottom: var(--space-lg);">
                  <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: var(--space-md);">
                    <h5 style="margin: 0;">${l.name}</h5>
                    ${l.stars>0?`<span class="skill-tag" style="font-size: 0.75rem; font-weight: 600;">⭐ ${l.stars}</span>`:""}
                  </div>

                  <p class="text-secondary" style="margin: 0; line-height: 1.6;">
                    ${l.description||"Repository"}
                  </p>
                </div>

                <div style="display: flex; flex-wrap: wrap; gap: var(--space-sm); margin-bottom: var(--space-lg);">
                  ${l.language?`<span class="skill-tag" style="font-size: 0.75rem;">${l.language}</span>`:""}
                  ${l.topics.slice(0,3).map(g=>`<span class="skill-tag" style="font-size: 0.75rem;">${g}</span>`).join("")}
                </div>

                <a href="${l.url}" target="_blank" class="project-link">
                  View Repository <span style="margin-left: 4px;">→</span>
                </a>
              </div>
            `).join("")}
          </div>
        </div>
      `;i.innerHTML=n}}return e}function j(){const{experience:a}=o,e=document.createElement("section");return e.id="experience",e.className="section",e.innerHTML=`
    <div class="container">
      <div class="section-tag text-center scroll-reveal">// EXPERIENCE</div>
      <h2 class="text-center scroll-reveal mb-3xl">Experience</h2>

      <div style="max-width: 900px; margin: 0 auto;">
        <!-- Timeline -->
        <div style="position: relative; padding: 0 0 0 40px;">
          <!-- Timeline line -->
          <div style="position: absolute; left: 8px; top: 0; bottom: 0; width: 2px; background: linear-gradient(180deg, var(--color-accent), transparent);"></div>

          ${a.map(t=>`
            <div class="timeline-item scroll-reveal" style="margin-bottom: 32px; position: relative;">
              <!-- Timeline dot -->
              <div style="position: absolute; left: -44px; top: 6px; width: 20px; height: 20px; background: var(--color-accent); border-radius: 50%; border: 3px solid var(--color-bg-primary); box-shadow: 0 0 0 4px var(--color-bg-secondary);"></div>

              <div class="card">
                <div style="display: flex; gap: 14px; align-items: flex-start; margin-bottom: 8px;">
                  <span class="org-icon" data-monogram="${t.monogram}">
                    <img src="/Personal_Portfolio/logos/${t.logo}" alt="${t.company} logo" loading="lazy"
                         onerror="this.parentElement.classList.add('org-icon-fallback'); this.remove();" />
                  </span>
                  <div style="flex: 1; min-width: 0;">
                    <div style="display: flex; justify-content: space-between; align-items: start; flex-wrap: wrap; gap: 8px;">
                      <h4 style="margin: 0;">${t.title}</h4>
                      <span style="font-size: 0.85rem; color: var(--color-accent); white-space: nowrap;">${t.period}</span>
                    </div>
                    <p style="margin: 4px 0 0 0; color: var(--color-text-secondary); font-weight: 600;">${t.company}</p>
                    <p style="margin: 2px 0 0 0; font-size: 0.9rem; color: var(--color-text-tertiary);">${t.location} • ${t.type}</p>
                  </div>
                </div>
                <div style="margin-bottom: 12px;"></div>

                <ul style="list-style: none; font-size: 0.9rem; margin-bottom: 12px;">
                  ${t.highlights.map(s=>`<li style="margin-bottom: 6px;">✓ ${s}</li>`).join("")}
                </ul>

                <div style="display: flex; flex-wrap: wrap; gap: 6px;">
                  ${t.skills.map(s=>`<span class="skill-tag" style="font-size: 0.75rem;">${s}</span>`).join("")}
                </div>
              </div>
            </div>
          `).join("")}
        </div>
      </div>
    </div>
  `,e}function T(){const{conferences:a}=o,e=document.createElement("section");return e.id="conferences",e.className="section",e.style.backgroundColor="var(--color-bg-secondary)",e.innerHTML=`
    <div class="container">
      <div class="section-tag text-center scroll-reveal">// CONFERENCES</div>
      <h2 class="text-center scroll-reveal mb-3xl">Conferences</h2>

      <div class="grid-auto" style="max-width: 1000px; margin: 0 auto;">
        ${a.map((t,s)=>`
          <div class="card scroll-reveal stagger-${Math.min(s+1,10)}">
            <div style="display: flex; gap: 14px; align-items: flex-start; margin-bottom: 12px;">
              <span class="org-icon" data-monogram="${t.monogram}">
                <img src="/Personal_Portfolio/logos/${t.logo}" alt="${t.organizer} logo" loading="lazy"
                     onerror="this.parentElement.classList.add('org-icon-fallback'); this.remove();" />
              </span>
              <div style="flex: 1; min-width: 0;">
                <div style="display: flex; justify-content: space-between; align-items: start; flex-wrap: wrap; gap: 8px;">
                  <h4 style="margin: 0;">${t.name}</h4>
                  <span style="font-size: 0.85rem; color: var(--color-accent); white-space: nowrap;">${t.period}</span>
                </div>
                <p style="margin: 4px 0 0 0; color: var(--color-text-secondary); font-weight: 600;">${t.organizer}</p>
                <p style="margin: 2px 0 0 0; font-size: 0.9rem; color: var(--color-text-tertiary);">${t.location}</p>
              </div>
            </div>

            <ul style="list-style: none; font-size: 0.9rem; padding: 0;">
              ${t.highlights.map(i=>`<li style="margin-bottom: 8px;">
                    <span style="color: var(--color-accent); margin-right: 8px;">→</span>${i}
                  </li>`).join("")}
            </ul>
          </div>
        `).join("")}
      </div>
    </div>
  `,e}function M(){const{certifications:a}=o,e=document.createElement("section");return e.id="certifications",e.className="section",e.innerHTML=`
    <div class="container">
      <div class="section-tag text-center scroll-reveal">// CERTIFICATIONS</div>
      <h2 class="text-center scroll-reveal mb-3xl">Certifications</h2>

      <div class="grid-3">
        ${a.map((t,s)=>`
          <a href="/Personal_Portfolio/certificates/${t.file}" target="_blank" rel="noopener"
             class="card scroll-reveal stagger-${Math.min(s+1,10)}"
             style="text-decoration: none; color: inherit; display: flex; flex-direction: column; gap: 8px;">
            <div style="font-size: 1.75rem;">📜</div>
            <h5 style="margin: 0; line-height: 1.35;">${t.name}</h5>
            <p class="text-secondary" style="margin: 0; font-size: 0.88rem;">${t.issuer}</p>
            <p style="margin: 0; font-size: 0.82rem; color: var(--color-accent);">Issued ${t.date}</p>
            <span class="project-link" style="margin-top: auto; font-size: 0.85rem;">View certificate →</span>
          </a>
        `).join("")}
      </div>
    </div>
  `,e}function I(){const{personal:a}=o,e=document.createElement("section");return e.id="contact",e.className="section",e.style.backgroundColor="var(--color-bg-secondary)",e.innerHTML=`
    <div class="container">
      <div style="max-width: 700px; margin: 0 auto; text-align: center;">
        <h2 class="scroll-reveal mb-xl">Let's Connect</h2>

        <p class="text-secondary scroll-reveal" style="font-size: 1.1rem; margin-bottom: 32px;">
          I'm always interested in hearing about new projects and opportunities. Feel free to reach out!
        </p>

        <!-- Contact Options -->
        <div class="grid-2 mb-4xl">
          <a href="mailto:${a.email}" class="card scroll-reveal" style="text-decoration: none; display: flex; flex-direction: column; align-items: center;">
            <div style="font-size: 2.5rem; margin-bottom: 12px;">✉️</div>
            <h5 style="margin-bottom: 8px;">Email</h5>
            <p style="font-size: 0.9rem; color: var(--color-accent);">${a.email}</p>
          </a>

          <a href="${a.linkedin}" target="_blank" class="card scroll-reveal" style="text-decoration: none; display: flex; flex-direction: column; align-items: center;">
            <div style="font-size: 2.5rem; margin-bottom: 12px;">💼</div>
            <h5 style="margin-bottom: 8px;">LinkedIn</h5>
            <p style="font-size: 0.9rem; color: var(--color-accent);">View Profile</p>
          </a>

        </div>

        <!-- CTA Button -->
        <a href="mailto:${a.email}" class="btn btn-primary scroll-reveal mb-4xl">
          Send Me an Email
          <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
            <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
          </svg>
        </a>
      </div>
    </div>

    <!-- Footer -->
    <footer style="border-top: 1px solid rgba(255, 255, 255, 0.05); padding: 32px 0; margin-top: 32px;">
      <div class="container" style="text-align: center;">
        <p class="text-tertiary" style="font-size: 0.9rem;">
          © ${new Date().getFullYear()} Amrit Verma. Built with Vite, TypeScript & modern CSS.
        </p>
        <p class="text-tertiary" style="font-size: 0.85rem; margin-top: 12px;">
          <a href="#hero" style="color: var(--color-accent);">Back to top ↑</a>
        </p>
      </div>
    </footer>
  `,e}async function d(){console.log("🚀 Initializing portfolio...");const a=document.getElementById("app");if(!a){console.error("❌ App container not found");return}try{a.innerHTML="";const e=document.createElement("div");e.className="app-container",e.appendChild($()),e.appendChild(S()),e.appendChild(C()),e.appendChild(L());const t=await z();e.appendChild(t),e.appendChild(j()),e.appendChild(T()),e.appendChild(M()),e.appendChild(I()),a.appendChild(e),A(),H(),P(),console.log("✓ Portfolio initialized successfully")}catch(e){console.error("❌ Failed to initialize portfolio:",e)}}function A(){f(),u();const a=document.querySelectorAll('[class*="stagger-"]'),e=Array.from(a);e.length>0&&y(e,"animate-fade-in-up",50),document.querySelectorAll(".skill-tag").forEach(s=>{s.addEventListener("mouseenter",()=>{s.style.transform="scale(1.05)"}),s.addEventListener("mouseleave",()=>{s.style.transform="scale(1)"})})}function H(){const a=document.querySelector(".navbar"),e=p(()=>{if(!a)return;const t=window.scrollY,s=document.querySelector(".hero");if(!s)return;const i=s.clientHeight;t>i*.5?a.classList.add("scrolled"):a.classList.remove("scrolled")},10);window.addEventListener("scroll",e),b(".section",(t,s)=>{if(s){const i=t.id,n=document.querySelector(`.navbar-nav a[href="#${i}"]`);n&&(document.querySelectorAll(".navbar-nav a").forEach(l=>{l.classList.remove("active")}),n.classList.add("active"))}})}function P(){const a=document.querySelector(".scroll-indicator");if(!a)return;const e=p(()=>{const t=window.scrollY,s=document.documentElement.scrollHeight-window.innerHeight,i=t/s*100;a.style.width=`${i}%`},10);window.addEventListener("scroll",e)}function N(){const a=document.createElement("style");a.textContent=`
    .navbar.scrolled {
      background: rgba(10, 10, 10, 0.8);
      border-bottom-color: rgba(74, 158, 255, 0.1);
    }

    .app-container {
      width: 100%;
    }

    /* Additional responsive adjustments */
    @media (max-width: 768px) {
      .navbar-nav {
        gap: 12px;
      }

      .navbar-nav a {
        font-size: 0.8rem;
      }

      .grid-2 {
        grid-template-columns: 1fr;
      }

      .grid-3 {
        grid-template-columns: 1fr;
      }
    }
  `,document.head.appendChild(a)}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",d):d();N();console.log("%c✨ Amrit Verma Portfolio ✨","color: #4a9eff; font-size: 16px; font-weight: bold;");console.log("%cBuilt with Vite + TypeScript + Modern CSS","color: #a0a0a0; font-size: 12px;");
