import { File } from "@/src/types";
import { useSupabase } from "@/src/contexts/SupabaseProvider";
import { fetchDeleteFile } from "@/src/libs/externals/supabase/queries/files";
import { useSetEditorSelectedFile } from "@/src/hooks/codes/editors/setter/useSetEditorSelectedFile";
import { useDeleteFileFromEditorFiles } from "@/src/hooks/codes/editors/useDeleteFileFromEditorFiles";

export const useDeleteFileInSidebar = () => {
    const { client } = useSupabase();

    const { setSelectedFile } = useSetEditorSelectedFile();
    const { deleteFile } = useDeleteFileFromEditorFiles();


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