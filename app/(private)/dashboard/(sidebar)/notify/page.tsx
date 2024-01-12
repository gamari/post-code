import React from "react";

import {
  actionGetOwnNotifications,
  actionUpdateNotificationDone,
} from "@/src/actions/notifications";
import { Flex } from "@/src/components/atoms/containers/Flex";
import { Heading } from "@/src/components/atoms/texts/heading";
import { NotificationCard } from "@/src/components/organisms/notifications/NotificationCard";
import { NotifyDone } from "./NotifyDone";
import { HiddenContainer } from "@/src/components/organisms/hidden-container";

const Page = async () => {
  const notifications = await actionGetOwnNotifications();
  await actionUpdateNotificationDone(notifications);

  return (
    <div className="p-10">
      <Heading className="mb-6">通知一覧</Heading>

      <HiddenContainer
        isHidden={!notifications?.length}
        message="通知が存在しません"
      >
        <Flex direction="column" gap={12} className="max-w-lg">
          {notifications.map((notification) => (
            <NotificationCard notification={notification} />
          ))}
        </Flex>
      </HiddenContainer>

      <NotifyDone />
    </div>
  );
};

export default Page;
