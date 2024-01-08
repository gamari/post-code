import React from "react";

import {
  actionGetOwnNotifications,
  actionUpdateNotificationDone,
} from "@/src/actions/notifications";
import { Flex } from "@/src/components/atoms/containers/Flex";
import { Heading } from "@/src/components/atoms/texts/heading";
import { NotificationCard } from "@/src/components/organisms/notifications/NotificationCard";
import { NotifyDone } from "./NotifyDone";
import { NoContent } from "@/src/components/molecules/displays/no-content";

const Page = async () => {
  const notifications = await actionGetOwnNotifications();
  await actionUpdateNotificationDone(notifications);

  return (
    <div className="p-10">
      <Heading className="mb-6">通知一覧</Heading>

      <Flex direction="column" gap={12} className="max-w-lg">
        {!notifications?.length && (
          <NoContent>通知が存在しません</NoContent>
        )}
        {notifications.map((notification) => (
          <NotificationCard notification={notification} />
        ))}
      </Flex>

      <NotifyDone />
    </div>
  );
};

export default Page;
