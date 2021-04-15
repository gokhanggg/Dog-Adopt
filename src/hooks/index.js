import { useState, useEffect } from 'react';

export const useClickOutsideState = (initialValue, refs = []) => {
  const [isOpen, setIsOpen] = useState(initialValue);
  const close = ({ target }) => {
    if (!refs.find(ref => ref.current?.contains(target))) {
      setIsOpen(false);
    }
  }

  useEffect(() => {
    global.window.addEventListener('click', close);
    return () => global.window.removeEventListener('click', close);
  })

  return [isOpen, setIsOpen];
};

