
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

      // Reduce animations on mobile for better performance
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        document.documentElement.style.setProperty('--animation-duration', '0.1s');
      }
    }
  }, [isMobile]);

  return { isMobile };
}
