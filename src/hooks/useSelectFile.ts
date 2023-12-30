import { File } from "../types";
import { useCallback, useState } from "react";

export const useSelectFile = () => {
    const [targetFile, setTargetFile] = useState<File | null>(null);

    const selectFile = useCallback((file: File) => {
        setTargetFile(file);
    }, []);

    return { targetFile, selectFile };
}