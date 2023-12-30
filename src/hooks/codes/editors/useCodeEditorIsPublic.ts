import { useCodeEditorContext } from "@/src/contexts/editors/CodeEditorProvider"

export const useCodeEditorIsPublic = () => {
    const { code, setCode } = useCodeEditorContext();

    const setIsPublic = (isPublic: boolean) => {
        if (!code) return;
        setCode({ ...code, is_public: isPublic });
    }

    return { setIsPublic };
}