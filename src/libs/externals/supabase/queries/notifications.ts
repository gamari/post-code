import { Notification } from "@/src/types";
import { CODE_TABLE, COMMENT_TABLE, NOTIFICATION_TABLE, PUBLIC_USER_TABLE } from "@/src/libs/constants/tables";
import { NotificationDetail } from "@/src/types";
import { SupabaseClient } from "@supabase/supabase-js";
import { QueryOptions, applyQueryOptions } from "../options";
import { fetchAuthUser } from "./users";
import { convertPostgretErrorToAppErrorMessage } from "../errors";

// Select
export const fetchNotificationList = async (client: SupabaseClient, options?: QueryOptions) => {
    let query = client
        .from(NOTIFICATION_TABLE)
        .select(`
            *,
            ${COMMENT_TABLE}!comment_id(
                *,
                ${CODE_TABLE}!code_id(*),
                ${PUBLIC_USER_TABLE}!user_id(*)
            )
        `);

    query = applyQueryOptions(query, options);

    const { data, error } = await query;

    if (error) throw new Error(convertPostgretErrorToAppErrorMessage(error));

    return data.map((notify) => {
        return {
            ...notify,
            comment: {
                ...notify?.comments,
                user: notify?.comments?.public_users,
                code: notify?.comments?.codes
            }
        }
    }) as NotificationDetail[];
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

    // TODO 要件等
    // TODO 受け手側でtrue/falseを判断したほうが良い
    if (error) return false;

    return !!data?.length;
}


// Create
export const fetchCreateNotification = async (notification: Notification, client: SupabaseClient) => {
    const { data, error } = await client
        .from(NOTIFICATION_TABLE)
        .insert([notification]);

    if (error) throw new Error(convertPostgretErrorToAppErrorMessage(error));

    return data;
}

export const fetchUpdateNotification = async (notification: Notification, client: SupabaseClient) => {
    const { data, error } = await client
        .from(NOTIFICATION_TABLE)
        .update(notification)
        .eq("id", notification.id);

    if (error) throw new Error(convertPostgretErrorToAppErrorMessage(error));

    return data;
}