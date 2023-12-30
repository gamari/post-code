import React from "react";

import { Comment, CommentDetail } from "@/src/types";
import { HDotIcon } from "../../atoms/icons/h-dot-icon";
import { Avatar } from "../../molecules/avatar";
import { Username } from "../../atoms/texts/username";
import { DateString } from "../../atoms/texts/date-string";
import { Button } from "../../atoms/buttons/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../ui/dropdown-menu";
import { DeleteIcon } from "lucide-react";
import { MarkdownPreviewer } from "../../molecules/displays/markdown-previewer";

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
  const { user } = comment || {};

  return (
    <div className={`px-8 py-6 ${className}`}>
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row items-center gap-2">
          <Avatar iconType={user?.icon_type} />
          <Username value={user?.username || ""} />
        </div>

        {isAuthor && (
          <div className="flex flex-row gap-2 items-center">
            <DateString
              value={comment?.created_at}
              type="datetime"
              className="text-sm text-gray-700"
            />

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
          </div>
        )}
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
