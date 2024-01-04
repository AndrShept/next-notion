import { useEffect, useState } from 'react';

export const useScrollTop = (threshold = 10) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > threshold) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    addEventListener('scroll', handleScroll);
    return () => removeEventListener('scroll', handleScroll);
  }, [threshold]);
  return scrolled
};
