import React from "react";

import { Notification, NotificationDetail } from "@/src/types";
import { Flex } from "../../atoms/containers/Flex";
import { TimeAgo } from "../../molecules/time-ago";
import { Avatar } from "../../molecules/avatar";
import Link from "next/link";

interface Props {
  notification: NotificationDetail;
}

export const NotificationCard = ({ notification }: Props) => {
  const { comment } = notification;
  if (comment) {
    return (
      <Flex className="bg-white p-4 rounded-lg" gap={8}>
        <div>
          <Avatar iconType={comment?.user?.icon_type} />
        </div>
        <Flex direction="column">
          <div>
            {comment?.user?.username}さんが【
            <Link href={`/codes/${comment?.code?.id}/detail`}>
              {comment?.code?.title}
            </Link>】にコメントをしました。
          </div>

          <TimeAgo date={notification?.created_at || ""} className="text-sm text-gray-400 mt-1" />
        </Flex>
      </Flex>
    );
  }

  // TODO 作成する
  if (notification?.favorite_id) {
    return <div>Like</div>;
  }

  return null;
};
