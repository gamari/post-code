import { getServerClient } from "../libs/externals/supabase/admin-client";
import { createEqCondition } from "../libs/externals/supabase/options";
import { fetchNotificationList } from "../libs/externals/supabase/queries/notifications";
import { actionGetAuthUser } from "./users";

export const actionGetOwnNotifications = async () => {
    const client = getServerClient();
    const authUser = await actionGetAuthUser();
    const notifications = await fetchNotificationList(client, {
        eq: [
            createEqCondition("user_id", authUser?.id)
        ],
    });

    return notifications;
}