import { useEffect, useState } from 'react';

export const useHashNavigation = () => {
  const [currentHash, setCurrentHash] = useState('');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1); // Remove the # symbol
      setCurrentHash(hash);
    };

    // Set initial hash
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const closeModal = () => {
    window.history.pushState('', document.title, window.location.pathname);
    setCurrentHash('');
  };

  return {
    currentHash,
    closeModal,
    isModalOpen: currentHash !== ''
  };
};
