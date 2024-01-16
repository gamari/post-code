import React from "react";

import { SideLink } from "./SideLink";
import { Logo } from "@/src/components/molecules/logo";
import { CommentIcon } from "@/src/components/atoms/icons/comment-icon";
import { AccountIcon } from "@/src/components/atoms/icons/account-icon";
import { SideNotifyLink } from "./SideNotifyLink";
import { actionGetMySelf } from "@/src/actions/users";
import { Avatar } from "@/src/components/molecules/avatar";
import { Flex } from "@/src/components/atoms/containers/Flex";

export const DashboardSidebar = async () => {
  const user = await actionGetMySelf();

  return (
    <div className="w-[240px]">
      <aside className="sticky top-[100px] h-screen/50 flex flex-col justify-between rounded-lg  bg-white">
        <div className="px-6 py-8">
          <h3 className="text-xl font-bold text-gray-700">メニュー</h3>

          <Flex alignItems="center" gap={4} className="p-2 text-gray-700">
            <div>
              <Avatar
                iconType={user?.icon_type}
                avatarUrl={user?.avatar_url}
                size="sm"
              />
            </div>
            <div>{user?.username}</div>
          </Flex>

          <div>
            <div className="flex flex-col space-y-3 py-3">
              <SideLink
                url="/dashboard"
                label="記事"
                Icon={<Logo size="sm" />}
              />
              <SideLink
                url="/dashboard/comment"
                label="コメント"
                Icon={<CommentIcon size="sm" />}
              />
              <SideNotifyLink />
              <SideLink
                url="/dashboard/account"
                label="アカウント設定"
                Icon={<AccountIcon size="sm" />}
              />
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
};
