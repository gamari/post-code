import { v4 as uuidv4 } from 'uuid';
import { useSupabase } from "../contexts/SupabaseProvider"
import { fetchAuthUser } from "../libs/externals/supabase/queries/users";

export const useUploadImage = () => {
    const { client } = useSupabase();

    const uploadImage = async (file: File) => {
        if (!client) return;
        const authUser = await fetchAuthUser(client);
        const userId = authUser?.id;
        const randomId = uuidv4();
        const { error } = await client.storage.from("images").upload(`${userId}/${randomId}-${file?.name}`, file);

        if (error) throw error;

        const { data: {
            publicUrl
        } } = client.storage
            .from('images')
            .getPublicUrl(`${userId}/${file.name}`);
        return publicUrl
    }

    return {
        uploadImage,
    }
}