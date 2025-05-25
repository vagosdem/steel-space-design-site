
import { useEffect } from 'react';
import { useIsMobile } from './use-mobile';

export function useMobileOptimization() {
  const isMobile = useIsMobile();

  useEffect(() => {
    if (isMobile) {
      // Defer non-critical scripts on mobile
      const scripts = document.querySelectorAll('script[src]');
      scripts.forEach((script) => {
        const src = script.getAttribute('src');
        if (src && !src.includes('essential') && !script.hasAttribute('defer')) {
          script.setAttribute('defer', 'true');
        }
      });

      // Defer GPT Engineer script specifically
      const gptScript = document.querySelector('script[src*="gptengineer.js"]');
      if (gptScript && !gptScript.hasAttribute('defer')) {
        gptScript.setAttribute('defer', 'true');
      }

      // Add intersection observer for lazy loading non-critical elements
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target as HTMLElement;
            element.classList.add('loaded');
          }
        });
      }, { threshold: 0.1 });

      // Observe images that are not immediately visible
      const images = document.querySelectorAll('img[loading="lazy"]');
      images.forEach((img) => observer.observe(img));

      // Reduce animations on mobile for better performance
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        document.documentElement.style.setProperty('--animation-duration', '0.1s');
      }

      return () => {
        observer.disconnect();
      };
    }
  }, [isMobile]);

  return { isMobile };
}
