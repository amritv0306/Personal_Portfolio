/* ============================================
   CERTIFICATIONS SECTION COMPONENT
   ============================================ */

export function createCertifications(): HTMLElement {
  const certificationsSection = document.createElement('section');
  certificationsSection.id = 'certifications';
  certificationsSection.className = 'section';
  certificationsSection.style.backgroundColor = 'var(--color-bg-secondary)';

  certificationsSection.innerHTML = `
    <div class="container">
      <h2 class="text-center scroll-reveal mb-3xl">Certifications</h2>

      <div id="certs-grid" class="grid-auto">
        <!-- Certificates will be dynamically loaded here -->
        <div class="card scroll-reveal" style="text-align: center; padding: 48px 24px;">
          <div style="font-size: 3rem; margin-bottom: 16px;">📜</div>
          <h4 style="margin-bottom: 8px;">Ready for Certificates</h4>
          <p class="text-secondary" style="font-size: 0.9rem;">Upload your certificate images or PDFs to showcase them here. They'll appear as beautiful cards below.</p>
        </div>
      </div>

      <div style="text-align: center; margin-top: 32px;">
        <p class="text-secondary">Certifications can be added via the portfolio directory</p>
      </div>
    </div>
  `;

  // Try to load certificates from filesystem (if available)
  loadCertificates(certificationsSection);

  return certificationsSection;
}

/**
 * Load certificates from the public directory
 */
function loadCertificates(section: HTMLElement): void {
  // This would load certificate images/PDFs from a /public/certificates directory
  // For now, we'll just prepare the structure

  const certsGrid = section.querySelector('#certs-grid');

  // Example: If you have certificates, they would be added like this:
  const exampleCertificates: Array<{ name: string; issuer: string; date: string; image: string }> = [
    // {
    //   name: 'AI/ML Fundamentals',
    //   issuer: 'Coursera',
    //   date: '2024',
    //   image: '/certificates/ai-ml.jpg'
    // },
  ];

  if (exampleCertificates.length > 0 && certsGrid) {
    certsGrid.innerHTML = exampleCertificates
      .map(
        (cert, _idx) => `
      <div class="card scroll-reveal stagger-${Math.min(_idx + 1, 10)}" style="cursor: pointer; overflow: hidden;">
        <div style="width: 100%; height: 200px; background: linear-gradient(135deg, rgba(0,217,255,0.1), rgba(0,217,255,0.05)); border-radius: 8px; display: flex; align-items: center; justify-content: center; margin-bottom: 12px; position: relative;">
          <div style="font-size: 2.5rem;">📜</div>
        </div>
        <h4 style="margin-bottom: 8px;">${cert.name}</h4>
        <p class="text-secondary" style="margin-bottom: 8px; font-size: 0.9rem;">${cert.issuer}</p>
        <p class="text-tertiary" style="font-size: 0.85rem;">${cert.date}</p>
      </div>
    `
      )
      .join('');
  }
}

/**
 * Setup certificate modal (future enhancement)
 */
export function setupCertificateModal(): void {
  const certCards = document.querySelectorAll('[data-cert]');

  certCards.forEach((card) => {
    card.addEventListener('click', () => {
      // Create and show modal
      const modal = document.createElement('div');
      modal.className = 'modal';
      modal.innerHTML = `
        <div class="modal-content">
          <button class="modal-close">×</button>
          <img src="${card.getAttribute('data-image')}" alt="${card.getAttribute('data-name')}" />
        </div>
      `;

      document.body.appendChild(modal);

      modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.remove();
      });

      modal.querySelector('.modal-close')?.addEventListener('click', () => modal.remove());
    });
  });
}
