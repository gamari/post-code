import { File } from "@/src/types";
import { useSupabase } from "@/src/contexts/SupabaseProvider";
import { fetchDeleteFile } from "@/src/libs/externals/supabase/queries/files";
import { useCodeEditorFiles } from "../useCodeEditorFiles";
import { useCodeEditorSelectedFile } from "../useCodeEditorSelectedFile";

export const useDeleteFileInSidebar = () => {
    const { client } = useSupabase();

    const { setSelectedFile } = useCodeEditorSelectedFile();
    const { deleteFile } = useCodeEditorFiles();


    const onDeleteFile = async (file: File) => {
        if (!client) return;
        if (!confirm("本当に削除しますか？")) return;
        await fetchDeleteFile(file?.id, client);
        deleteFile(file);
        setSelectedFile(undefined);
    };

    return {
        onDeleteFile
    }
}