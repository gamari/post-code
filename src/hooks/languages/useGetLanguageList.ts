import { useLanguageList } from "@/src/contexts/LanguageListProvider";

export const useGetLanguageList = () => {
    const { languageList } = useLanguageList();
    return { languageList };
}