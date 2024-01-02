import { Notification } from "@/src/types";
import { NOTIFICATION_TABLE } from "@/src/libs/constants/tables";
import { NotificationDetail } from "@/src/types";
import { SupabaseClient } from "@supabase/supabase-js";
import { QueryOptions, applyOrderBy, applyQueryOptions } from "../options";
import { fetchAuthUser } from "./users";

// Select
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

// Check
export const fetchCheckOwnNotification = async (client: SupabaseClient) => {
    const authUser = await fetchAuthUser(client);

    if (!authUser) return false;

    const { data, error } = await client
        .from(NOTIFICATION_TABLE)
        .select("*")
        .eq("is_checked", false)
        .eq("user_id", authUser.id)
        .limit(1);

    if (error) return false;

    return !!data?.length;
}


// Create
export const fetchCreateNotification = async (notification: Notification, client: SupabaseClient) => {
    const { data, error } = await client
        .from(NOTIFICATION_TABLE)
        .insert([notification]);

    if (error) throw error;

    return data;
}

export const fetchUpdateNotification = async (notification: Notification, client: SupabaseClient) => {
    const { data, error } = await client
        .from(NOTIFICATION_TABLE)
        .update(notification)
        .eq("id", notification.id);

    if (error) throw error;

    return data;
}