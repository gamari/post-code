import { getServerClient } from "@/src/libs/externals/supabase/admin-client";
import { fetchFilesByCodeId } from "@/src/libs/externals/supabase/queries/files";

export const actionGetFiles = async (codeId: number) => {
    const client = await getServerClient();
    const files = await fetchFilesByCodeId(codeId, client);
    return files;
}