/* ============================================
   ANIMATION UTILITIES
   ============================================ */

export interface AnimationConfig {
  duration?: number;
  delay?: number;
  easing?: string;
  stagger?: number;
}

/**
 * Apply scroll reveal animation to elements
 */
export function setupScrollReveal(): void {
  const revealElements = document.querySelectorAll('.scroll-reveal');

  if (!revealElements.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    }
  );

  revealElements.forEach((el) => observer.observe(el));
}

/**
 * Animate staggered elements
 */
export function staggerAnimation(
  elements: HTMLElement[],
  animationClass: string,
  staggerDelay: number = 100
): void {
  elements.forEach((el, index) => {
    el.style.animationDelay = `${index * staggerDelay}ms`;
    el.classList.add(animationClass);
  });
}

/**
 * Count animation - animate numbers from 0 to target
 */
export function animateCounter(
  element: HTMLElement,
  target: number,
  duration: number = 2000
): void {
  let current = 0;
  const increment = target / (duration / 16);

  const update = () => {
    current += increment;
    if (current >= target) {
      element.textContent = target.toString();
    } else {
      element.textContent = Math.floor(current).toString();
      requestAnimationFrame(update);
    }
  };

  update();
}

/**
 * Trigger animation on hover — removes the class when the cursor leaves
 * so infinite animations don't get stuck on.
 */
export function setupHoverAnimation(
  selector: string,
  animationClass: string
): void {
  const elements = document.querySelectorAll(selector);

  elements.forEach((el) => {
    el.addEventListener('mouseenter', () => {
      el.classList.add(animationClass);
    });

    el.addEventListener('mouseleave', () => {
      el.classList.remove(animationClass);
    });
  });
}

/**
 * Parallax effect on scroll
 */
export function setupParallax(selector: string, speed: number = 0.5): void {
  const elements = document.querySelectorAll(selector);

  window.addEventListener('scroll', () => {
    elements.forEach((el) => {
      const rect = (el as HTMLElement).getBoundingClientRect();
      const elementPosition = window.scrollY + rect.top;
      const elementDistance = elementPosition - window.scrollY;

      if (window.scrollY + window.innerHeight > elementPosition) {
        const yPos = (window.scrollY - elementDistance) * speed;
        (el as HTMLElement).style.backgroundPosition = `0px ${yPos}px`;
      }
    });
  });
}

/**
 * Smooth scroll to element
 */
export function smoothScroll(targetId: string): void {
  const target = document.getElementById(targetId);
  if (target) {
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

/**
 * Animate element opacity
 */
export function fadeInElement(
  element: HTMLElement,
  duration: number = 600
): Promise<void> {
  return new Promise((resolve) => {
    element.style.transition = `opacity ${duration}ms ease-out`;
    element.style.opacity = '1';
    setTimeout(resolve, duration);
  });
}

/**
 * Create animated text effect
 */
export function animateText(
  element: HTMLElement,
  text: string,
  duration: number = 1000
): void {
  element.innerHTML = text
    .split('')
    .map((char, i) => {
      if (char === ' ') return '&nbsp;';
      return `<span class="text-animate-char" style="animation-delay: ${
        (i * duration) / text.length
      }ms">${char}</span>`;
    })
    .join('');

  element.querySelectorAll('.text-animate-char').forEach((char) => {
    char.classList.add('animate-fade-in-up');
  });
}

/**
 * Setup intersection observer for custom callbacks
 */
export function observeElements(
  selector: string,
  callback: (el: Element, isVisible: boolean) => void,
  threshold: number = 0.1
): IntersectionObserver {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        callback(entry.target, entry.isIntersecting);
      });
    },
    { threshold }
  );

  document.querySelectorAll(selector).forEach((el) => observer.observe(el));

  return observer;
}

/**
 * Debounce function for scroll events
 */
export function debounce<T extends any[]>(
  func: (...args: T) => void,
  wait: number
): (...args: T) => void {
  let timeout: NodeJS.Timeout;

  return (...args: T) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

/**
 * Add visual feedback to button clicks
 */
export function setupButtonFeedback(): void {
  const buttons = document.querySelectorAll('.btn');

  buttons.forEach((btn) => {
    btn.addEventListener('click', (e: Event) => {
      const button = e.target as HTMLElement;
      const ripple = document.createElement('div');

      ripple.style.position = 'absolute';
      ripple.style.borderRadius = '50%';
      ripple.style.backgroundColor = 'rgba(255, 255, 255, 0.6)';
      ripple.style.width = '20px';
      ripple.style.height = '20px';
      ripple.style.animation = 'ripple 0.6s ease-out forwards';
      ripple.style.pointerEvents = 'none';

      button.style.position = 'relative';
      button.style.overflow = 'hidden';
      button.appendChild(ripple);

      setTimeout(() => ripple.remove(), 600);
    });
  });
}
