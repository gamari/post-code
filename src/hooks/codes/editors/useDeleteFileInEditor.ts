import { File } from "@/src/types";

import { useSupabase } from "@/src/contexts/SupabaseProvider";
import { fetchDeleteFile } from "@/src/libs/externals/supabase/queries/files";
import { useDeleteFileFromEditorFiles } from "./useDeleteFileFromEditorFiles";
import { useSetEditorSelectedFile } from "./setter/useSetEditorSelectedFile";

export const useDeleteFileInEditor = () => {
    const { client } = useSupabase();

    const { setSelectedFile } = useSetEditorSelectedFile();
    const { deleteFile } = useDeleteFileFromEditorFiles();

    const deleteFileInEditor = async (file: File) => {
        if (!client) return;
        await fetchDeleteFile(file?.id, client);
        deleteFile(file);
        setSelectedFile(undefined);
    };

    return {
        deleteFileInEditor
    }
}