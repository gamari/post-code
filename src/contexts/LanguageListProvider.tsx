"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { Language } from "../types";
import { useSupabase } from "./SupabaseProvider";
import { fetchLanguageList } from "../libs/externals/supabase/queries/languages";

interface ContextProps {
  languageList: Language[];
  setLanguageList: React.Dispatch<React.SetStateAction<Language[]>>;
}

interface ProviderProps {
  children: React.ReactNode;
}

const LanguageListContext = createContext<ContextProps>({
  languageList: [],
  setLanguageList: () => {},
});

export const LanguageListProvider = ({ children }: ProviderProps) => {
  const { client } = useSupabase();
  const [languageList, setLanguageList] = useState<Language[]>([]);

  useEffect(() => {
    async function init() {
      if (!client) return;
      if (languageList?.length > 0) return;
      const languages = await fetchLanguageList(client);
      setLanguageList(languages);
    }

    init();
  }, [client]);

  return (
    <LanguageListContext.Provider value={{ languageList, setLanguageList }}>
      {children}
    </LanguageListContext.Provider>
  );
};

export const useLanguageList = () => {
  const context = useContext(LanguageListContext);
  if (context === undefined) {
    throw new Error("LanguageListProvider内で利用してください");
  }
  return context;
};
