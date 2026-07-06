/* ============================================
   CONTACT/FOOTER SECTION COMPONENT
   ============================================ */

import { portfolioData } from '../data';

export function createContact(): HTMLElement {
  const { personal } = portfolioData;

  const contact = document.createElement('section');
  contact.id = 'contact';
  contact.className = 'section';
  contact.style.backgroundColor = 'var(--color-bg-secondary)';

  contact.innerHTML = `
    <div class="container">
      <div style="max-width: 700px; margin: 0 auto; text-align: center;">
        <h2 class="scroll-reveal mb-xl">Let's Connect</h2>

        <p class="text-secondary scroll-reveal" style="font-size: 1.1rem; margin-bottom: 32px;">
          I'm always interested in hearing about new projects and opportunities. Feel free to reach out!
        </p>

        <!-- Contact Options -->
        <div class="grid-2 mb-4xl">
          <a href="mailto:${personal.email}" class="card scroll-reveal" style="text-decoration: none; display: flex; flex-direction: column; align-items: center;">
            <div style="font-size: 2.5rem; margin-bottom: 12px;">✉️</div>
            <h5 style="margin-bottom: 8px;">Email</h5>
            <p style="font-size: 0.9rem; color: var(--color-accent);">${personal.email}</p>
          </a>

          <a href="${personal.linkedin}" target="_blank" class="card scroll-reveal" style="text-decoration: none; display: flex; flex-direction: column; align-items: center;">
            <div style="font-size: 2.5rem; margin-bottom: 12px;">💼</div>
            <h5 style="margin-bottom: 8px;">LinkedIn</h5>
            <p style="font-size: 0.9rem; color: var(--color-accent);">View Profile</p>
          </a>

        </div>

        <!-- CTA Button -->
        <a href="mailto:${personal.email}" class="btn btn-primary scroll-reveal mb-4xl">
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
  `;

  return contact;
}
