import { useCodeEditorContext } from "@/src/contexts/editors/CodeEditorProvider";

export const useCodeEditorTitle = () => {
    const { code, setCode } = useCodeEditorContext();

    function setTitle(title: string) {
        if (!code) return;
        setCode({
            ...code,
            title
        })
    }

    return {
        title: code?.title,
        setTitle
    }
}