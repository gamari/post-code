import { File } from "@/src/types";

import { useSupabase } from "@/src/contexts/SupabaseProvider";
import { fetchDeleteFile } from "@/src/libs/externals/supabase/queries/files";
import { useDeleteEditorFile } from "./useDeleteEditorFile";
import { useSetEditorSelectedFile } from "./useSetEditorSelectedFile";

export const useDeleteFileInEditor = () => {
    const { client } = useSupabase();

    const { setSelectedFile } = useSetEditorSelectedFile();
    const { deleteFile } = useDeleteEditorFile();

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