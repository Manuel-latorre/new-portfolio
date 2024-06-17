

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface LanguageContextType {
  isEnglish: boolean;
  switchToEnglish: () => void;
  switchToSpanish: () => void;
}

const LanguageContext = createContext<LanguageContextType>({
  isEnglish: false,
  switchToEnglish: () => {},
  switchToSpanish: () => {},
});

export function useLanguage() {
  return useContext(LanguageContext);
}

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [isEnglish, setIsEnglish] = useState<boolean>(false);

  const switchToEnglish = () => {
    setIsEnglish(true);
  };

  const switchToSpanish = () => {
    setIsEnglish(false);
  };

  return (
    <LanguageContext.Provider value={{ isEnglish, switchToEnglish, switchToSpanish }}>
      {children}
    </LanguageContext.Provider>
  );
};
