import { useEffect } from 'react';

export const useClickOutside = (ref, handler, priority = false) => {
  const handleClick = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      handler(e);
      e.stopPropagation();
    }
  };

  useEffect(() => {
    window.addEventListener('click', handleClick, {capture: priority});

    return () => {
      window.removeEventListener('click', handleClick, {capture: priority});
    };
  }, [ref, handler, priority]);
};
