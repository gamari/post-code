import { useCodeEditor } from "@/src/contexts/CodeEditorProvider";

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

    function setLanguage(languageId: number | null) {
        if (!code) return;
        setCode({ ...code, language: languageId });
    }

    return { setTitle, setDescription, setIsPublic, setLanguage };
}