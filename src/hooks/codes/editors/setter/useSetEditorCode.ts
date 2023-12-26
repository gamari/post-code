import { useCodeEditor } from "@/src/contexts/CodeEditorProvider";
import { Language } from "@/src/types";

export const useSetEditorCode = () => {
    const { code, setCode } = useCodeEditor();

    function setTitle(title: string) {
        if (!code) return;
        setCode({ ...code, title });
    }

    function setDescription(description: string) {
        if (!code) return;
        setCode({ ...code, description });
    }

    function setIsPublic(isPublic: boolean) {
        if (!code) return;
        setCode({ ...code, is_public: isPublic });
    }

    function setLanguage(language: Language | undefined) {
        if (!code) return;
        setCode({ ...code, language });
    }

    return { setTitle, setDescription, setIsPublic, setLanguage };
}