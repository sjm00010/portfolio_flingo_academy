import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const DESKTOP_HASH_SCROLL_OFFSET = -20;
const MOBILE_HASH_SCROLL_OFFSET = -40;
const DESKTOP_BREAKPOINT = 900;

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const target = document.querySelector(hash);
      if (target) {
        const offset =
          window.innerWidth >= DESKTOP_BREAKPOINT
            ? DESKTOP_HASH_SCROLL_OFFSET
            : MOBILE_HASH_SCROLL_OFFSET;
        const top = target.getBoundingClientRect().top + window.scrollY + offset;
        window.scrollTo({ top, behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname, hash]);

  return null;
}

export default ScrollToTop;
