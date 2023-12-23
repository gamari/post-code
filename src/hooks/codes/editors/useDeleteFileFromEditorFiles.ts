import { File  } from "@/src/types";

import { useGetEditorFiles } from "./getter/useGetEditorFiles"
import { useSetEditorFiles } from "./setter/useSetEditorFiles";

export const useDeleteFileFromEditorFiles = () => {
    const { files } = useGetEditorFiles();
    const { setFiles } = useSetEditorFiles();

    const deleteFile = (target: File) => {
        setFiles(files.filter((file) => file.id !== target.id));
    }

    return {
        deleteFile
    }
}