import { File  } from "@/src/types";

import { useGetEditorFiles } from "./useGetEditorFiles"
import { useSetEditorFiles } from "./useSetEditorFiles";

export const useDeleteEditorFile = () => {
    const { files } = useGetEditorFiles();
    const { setFiles } = useSetEditorFiles();

    const deleteFile = (target: File) => {
        setFiles(files.filter((file) => file.id !== target.id));
    }

    return {
        deleteFile
    }
}