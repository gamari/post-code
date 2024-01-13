import { CODE_TAGS_TABLE, TAG_TABLE } from "@/src/libs/constants/tables";
import { Tag } from "@/src/types";
import { SupabaseClient } from "@supabase/supabase-js";
import { fetchAuthUser } from "./users";
import { convertPostgretErrorToAppErrorMessage } from "../errors";


export const fetchOrCreateTag = async (name: string, client: SupabaseClient) => {
    const { data: tags, error } = await client
        .from(TAG_TABLE)
        .select("*")
        .eq("name", name)
        .limit(1);

    if (error) throw new Error(convertPostgretErrorToAppErrorMessage(error));

    if (tags?.length) return tags[0] as Tag;

    const { data: createdTag, error: createError } = await client
        .from(TAG_TABLE)
        .insert({ name })
        .select("*")
        .maybeSingle();

    if (createError) throw new Error(convertPostgretErrorToAppErrorMessage(createError));

    return createdTag as Tag;
}

export const fetchTagListOfCode = async (codeId: number, client: SupabaseClient) => {
    const { data, error } = await client
        .from(CODE_TAGS_TABLE)
        .select(`
            *,
            tag:tag_id (
                *
            )
        `)
        .eq("code_id", codeId);

    if (error) throw new Error(convertPostgretErrorToAppErrorMessage(error));


    return data.map((d) => d.tag) as Tag[];
}

export const fetchAttachTagToCode = async (codeId: number, tagId: number, client: SupabaseClient) => {
    const authUser = await fetchAuthUser(client);

    if (!authUser) throw new Error("ログインしてください。");

    const { data, error } = await client
        .from(CODE_TAGS_TABLE)
        .insert({ code_id: codeId, tag_id: tagId, user_id: authUser.id })
        .select("*");

    if (error) throw new Error(convertPostgretErrorToAppErrorMessage(error));


    return data as Tag[];
}

export const fetchRemoveTagFromCode = async (codeId: number, tagId: number, client: SupabaseClient) => {
    const { error } = await client
        .from(CODE_TAGS_TABLE)
        .delete()
        .eq("code_id", codeId)
        .eq("tag_id", tagId);

    if (error) throw new Error(convertPostgretErrorToAppErrorMessage(error));

}

export const fetchTagListByName = async (name: string, client: SupabaseClient) => {
    const { data: tags, error } = await client
        .from(TAG_TABLE)
        .select("*")
        .eq("name", name)
        .limit(5);

    if (error) throw new Error(convertPostgretErrorToAppErrorMessage(error));

    return tags as Tag[];
}