import { useLanguageListContext } from "@/src/contexts/LanguageListProvider";

export const useLanguageList = () => {
    const { languageList } = useLanguageListContext();

    const getLanguage = (languageId?: number | null) => {
        if (!languageId) return null;
        const language = languageList.find((language) => language.id === languageId);
        if (!language) return null;
        return language.name;
    }

    return { languageList, getLanguage };
}