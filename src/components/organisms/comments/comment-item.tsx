import React from "react";

import { Comment, CommentDetail } from "@/src/types";
import { HDotIcon } from "../../atoms/icons/h-dot-icon";
import { Avatar } from "../../molecules/avatar";
import { Username } from "../../atoms/texts/username";
import { DateString } from "../../atoms/texts/date-string";
import { Button } from "../../atoms/forms/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../ui/dropdown-menu";
import { DeleteIcon } from "lucide-react";
import { MarkdownPreviewer } from "../utils/previewer/MarkdownPreviewer";
import Link from "next/link";

interface Props {
  comment?: CommentDetail;
  className?: string;
  onDelete: (comment: Comment) => void;
  isAuthor?: boolean;
}

export const CommentItem = ({
  comment,
  className = "",
  onDelete,
  isAuthor = false,
}: Props) => {
  const { user, user_id } = comment || {};

  return (
    <div className={`px-8 py-6 ${className}`}>
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row items-center gap-3">
          <Link href={`/accounts/${user_id}`}>
            <Avatar iconType={user?.icon_type} avatarUrl={user?.avatar_url} />
          </Link>

          <Username value={user?.username || ""} />
          <DateString
            value={comment?.created_at}
            type="datetime"
            className="text-sm text-gray-700"
          />
        </div>

        <div className="flex flex-row gap-2 items-center">
          {isAuthor && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost">
                  <HDotIcon className="hover rounded-full hover:bg-gray-100 h-6 w-6 p-1 cursor-pointer" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-24">
                <DropdownMenuGroup>
                  <DropdownMenuItem
                    onClick={() => {
                      comment && onDelete(comment);
                    }}
                    className="cursor-pointer"
                  >
                    <DeleteIcon className="mr-2 h-4 w-4" />
                    <span>削除</span>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </div>
      </div>

      <div className="mt-3">
        <MarkdownPreviewer content={comment?.comment || ""} />
      </div>

      <div>
        <div>{/* TODO いいねとか */}</div>
      </div>
    </div>
  );
};
