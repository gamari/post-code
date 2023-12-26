import { useSupabase } from "@/src/contexts/SupabaseProvider";
import { fetchLanguageList } from "@/src/libs/externals/supabase/queries/languages";
import { Language } from "@/src/types";
import { useEffect, useState } from "react";

export const useGetLanguageList = () => {
    const { client } = useSupabase();
    const [languageList, setLanguageList] = useState<Language[]>([]);

    useEffect(() => {
        async function init() {
            if (!client) return
            const languages = await fetchLanguageList(client);
            setLanguageList(languages);
        }
        init();
    }, [client])

    const getLanguageName = (languageId: number | null) => {
        if (!languageList) return "";
        const language = languageList.find(language => language.id === languageId);
        if (!language) return "";
        return language.display;
    }


    return { languageList, getLanguageName };
}