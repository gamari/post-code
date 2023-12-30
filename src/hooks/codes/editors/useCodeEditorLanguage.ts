import { useCodeEditorContext } from "@/src/contexts/editors/CodeEditorProvider";
import { Language } from "@/src/types";

export const useCodeEditorLanguage = () => {
    const { code, setCode } = useCodeEditorContext();

    const setLanguage = (language?: Language) => {
        if (!code) return;
        setCode({ ...code, language });
    }

    return { setLanguage };
}