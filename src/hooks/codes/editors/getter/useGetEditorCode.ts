import { useCodeEditorContext } from "@/src/contexts/editors/CodeEditorProvider";

export const useGetEditorCode = () => {
    const { code } = useCodeEditorContext();
    return { 
        code,
        title: code?.title,
     };
}