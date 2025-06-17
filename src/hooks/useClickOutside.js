import { useEffect } from 'react';

export const useClickOutside = (ref, handler) => {
  const handleClick = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      handler(e);
    }
  };

  useEffect(() => {
    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('click', handleClick);
    };
  }, [ref, handler]);
};
