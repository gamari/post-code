import { FaLess } from "react-icons/fa6";
import { getServerClient } from "../libs/externals/supabase/admin-client";
import { createEqCondition, createOrderCondition } from "../libs/externals/supabase/options";
import { fetchNotificationList, fetchUpdateNotification } from "../libs/externals/supabase/queries/notifications";
import { NotificationDetail } from "../types";
import { actionGetAuthUser } from "./users";

export const actionGetOwnNotifications = async () => {
    const client = getServerClient();
    const authUser = await actionGetAuthUser();
    const notifications = await fetchNotificationList(client, {
        eq: [
            createEqCondition("user_id", authUser?.id)
        ],
        order: [
            createOrderCondition("created_at", false)
        ]
    });

    return notifications;
}

export const actionUpdateNotificationDone = async (notifications: NotificationDetail[]) => {
    const client = getServerClient();
    const updatedNotifications = notifications.filter(notification => !notification.is_checked).map((notification) => {
        return {
            ...notification,
            is_checked: true,
            comment: undefined
        }
    });

    for (const notification of updatedNotifications) {
        await fetchUpdateNotification(notification, client);
    }
}