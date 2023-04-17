import React, { createContext, useContext, useState, useEffect } from 'react';

// Create a context for night mode state
const NightModeContext = createContext<{ isNightMode: boolean, toggleNightMode: () => void } | null>(null);

// Custom hook to access the night mode context
const useNightMode = () => useContext(NightModeContext);

// Night mode provider component
const NightModeProvider: React.FC = ({ children }) => {
  const [isNightMode, setIsNightMode] = useState(false);

  // Toggle night mode
  const toggleNightMode = () => {
    setIsNightMode(!isNightMode);
    localStorage.setItem('nightMode', JSON.stringify(!isNightMode));
  };

  // Retrieve night mode state from local storage on component mount
  useEffect(() => {
    const storedNightMode = localStorage.getItem('nightMode');
    setIsNightMode(storedNightMode === 'true');
  }, []);

  return (
    <NightModeContext.Provider value={{ isNightMode, toggleNightMode }}>
      {children}
    </NightModeContext.Provider>
  );
};

// Night mode button component that uses the custom hook
const NightModeButton: React.FC = () => {
  const { isNightMode, toggleNightMode } = useNightMode();

  return (
    <button onClick={toggleNightMode}>
      {isNightMode ? 'Disable Night Mode' : 'Enable Night Mode'}
    </button>
  );
};

// Usage in a parent component
const App: React.FC = () => {
  return (
    <NightModeProvider>
      {/* Your app content */}
      <NightModeButton />
    </NightModeProvider>
  );
};

export default App;
