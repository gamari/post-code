import { File } from "@/src/types";

import { useCodeEditor } from "@/src/contexts/CodeEditorProvider";
import { useSupabase } from "@/src/contexts/SupabaseProvider";
import { fetchDeleteFile } from "@/src/libs/externals/supabase/queries/files";

export const useDeleteCodeFile = () => {
    const { client } = useSupabase();
    const {
        setSelectedFile,
        deleteFile: deleteFileInEditor,
    } = useCodeEditor();

    const deleteFile = async (file: File) => {
        if (!client) return;
        await fetchDeleteFile(file?.id, client);
        deleteFileInEditor(file);
        setSelectedFile(undefined);
    };

    return {
        deleteFile
    }
}