import { CONTACT_TABLE } from "@/src/libs/constants/tables";
import { Contact } from "@/src/types";
import { SupabaseClient } from "@supabase/supabase-js";
import { convertPostgretErrorToAppErrorMessage } from "../errors";

export const fetchCreateContact = async (data: Contact, client: SupabaseClient) => {
    const { data: contact, error } = await client
        .from(CONTACT_TABLE)
        .insert(data);

    if (error) throw new Error(convertPostgretErrorToAppErrorMessage(error));

    return contact;
}