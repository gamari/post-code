import { File } from "@/src/types";

import { useSetEditorFiles } from "./useSetEditorFiles"

export const useAddEditorFile = () => {
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