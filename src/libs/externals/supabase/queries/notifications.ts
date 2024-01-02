import { NOTIFICATION_TABLE } from "@/src/libs/constants/tables";
import { NotificationDetail } from "@/src/types";
import { SupabaseClient } from "@supabase/supabase-js";
import { QueryOptions, applyOrderBy, applyQueryOptions } from "../options";

export const fetchNotificationList = async (client: SupabaseClient, options?: QueryOptions) => {
    let query = client
        .from(NOTIFICATION_TABLE)
        .select(`
            *,
            comment:comment_id(
                *,
                user:user_id(*),
                code:code_id(*)
            )
        `);

    query = applyQueryOptions(query, options);
    query = applyOrderBy(query, options);

    const { data, error } = await query;

    if (error) throw error;

    return data as NotificationDetail[];
}

export const fetchCreateNotification = async (notification: Notification, client: SupabaseClient) => {
    const { data, error } = await client
        .from(NOTIFICATION_TABLE)
        .insert([notification]);

    if (error) throw error;

    return data;
}