import { FileType } from "@/src/libs/editors";
import { useGetLanguageList } from "./useGetLanguageList";

export const useGetLanguage = () => {
    const { languageList } = useGetLanguageList();

    const getLanguage = (languageId?: number | null) => {
        if (!languageId) return null;
        const language = languageList.find((language) => language.id === languageId);
        if (!language) return null;
        return language.name as FileType;
    }

    return {
        getLanguage
    }
}