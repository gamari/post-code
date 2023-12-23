import { File } from "@/src/types";

import { useSetEditorFiles } from "./setter/useSetEditorFiles"

export const useAddFileToEditorFiles = () => {
    const { setFiles } = useSetEditorFiles();

    const addFile = (file: File) => {
        setFiles((prev) => {
            return [...prev, file];
        });
    }


    return {
        addFile
    }
}