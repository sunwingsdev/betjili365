import { createContext, useState, useEffect } from "react";

export const LanguageContext = createContext();

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("bn");
  const [translations, setTranslations] = useState({});

  useEffect(() => {
    const fetchTranslations = async () => {
      try {
        console.log("Fetching translations for:", language); // ✅ Check korar jonno
        const response = await fetch(`/locales/${language}.json`);
        const data = await response.json();
        console.log("Fetched Data:", data); // ✅ Check korar jonno
        setTranslations(data);
      } catch (error) {
        console.error("Error loading translation:", error);
      }
    };

    if (language) {
      fetchTranslations(); // ✅ `language` set হওয়ার পর `fetch` কল করবো
    }
  }, [language]); // ✅ `language` পরিবর্তন হলেই নতুন `fetch` কল হবে

  return (
    <LanguageContext.Provider value={{ language, setLanguage, translations }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
