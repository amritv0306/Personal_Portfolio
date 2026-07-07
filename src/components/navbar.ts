/* ============================================
   NAVBAR COMPONENT
   ============================================ */

export function createNavbar(): HTMLElement {
  const navbar = document.createElement('nav');
  navbar.className = 'navbar';
  navbar.innerHTML = `
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
  `;

  setupNavbarScroll(navbar);
  setupNavbarLinks();

  return navbar;
}

/**
 * Setup navbar scroll effect (hide/show on scroll)
 */
function setupNavbarScroll(navbar: HTMLElement): void {
  let lastScrollTop = 0;

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;

    if (scrollTop > lastScrollTop && scrollTop > 100) {
      // Scrolling down, hide navbar
      navbar.classList.add('hidden');
    } else {
      // Scrolling up, show navbar
      navbar.classList.remove('hidden');
    }

    lastScrollTop = scrollTop;
  });
}

/**
 * Setup navbar link behavior
 */
function setupNavbarLinks(): void {
  const navLinks = document.querySelectorAll('.navbar-nav a');

  navLinks.forEach((link) => {
    link.addEventListener('click', (e: Event) => {
      e.preventDefault();
      const href = (link as HTMLAnchorElement).getAttribute('href');

      if (href && href.startsWith('#')) {
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          updateActiveLink(link);
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });

    // Update active link on scroll
    window.addEventListener('scroll', () => {
      const href = (link as HTMLAnchorElement).getAttribute('href');
      if (href && href.startsWith('#')) {
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          const rect = targetElement.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            updateActiveLink(link);
          }
        }
      }
    });
  });
}

/**
 * Update active navbar link
 */
function updateActiveLink(link: Element): void {
  document.querySelectorAll('.navbar-nav a').forEach((l) => {
    l.classList.remove('active');
  });
  link.classList.add('active');
}
