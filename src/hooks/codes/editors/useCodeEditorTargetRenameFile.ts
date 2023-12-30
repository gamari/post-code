import { File } from "@/src/types";
import { useCallback, useState } from "react";

export const useCodeEditorTargetRenameFile = () => {
    const [targetRenameFile, setTargetRenameFile] = useState<File | null>(null);

    const selectFile = useCallback((file: File) => {
        setTargetRenameFile(file);
    }, []);

    return { targetRenameFile, setTargetRenameFile };
}