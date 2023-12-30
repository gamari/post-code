import { useCodeEditorContext } from "@/src/contexts/editors/CodeEditorProvider";

export const useCodeEditorDescription = () => {
    const { code, setCode } = useCodeEditorContext();
    
    function setDescription(description: string) {
        if (!code) return;
        setCode({
            ...code,
            description
        });
    }

    return {
        description: code?.description,
        setDescription
    };
}