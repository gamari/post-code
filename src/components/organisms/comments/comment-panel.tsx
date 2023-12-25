import React from "react";

import { SlideIn } from "../../molecules/animation/SlideIn";
import { Comment } from "@/src/types";
import { HDotIcon } from "../../atoms/icons/HDotIcon";
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

interface Props {
  comment?: Comment;
  className?: string;
  onDelete: (comment: Comment) => void;
}

export const CommentPanel = ({ comment, className = "", onDelete }: Props) => {
  return (
    <div className={`px-8 py-6 ${className}`}>
      <SlideIn from="left">
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-row items-center gap-2">
            <Avatar />
            <Username value="ユーザー名" />
          </div>

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
              <DropdownMenuContent className="w-56">
                <DropdownMenuGroup>
                  <DropdownMenuItem
                    onClick={() => {
                      comment && onDelete(comment);
                    }}
                  >
                    <DeleteIcon className="mr-2 h-4 w-4" />
                    <span>Delete</span>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        <div className="mt-3">{comment?.comment}</div>

        <div>
          <div>{/* TODO いいねとか */}</div>
        </div>
      </SlideIn>
    </div>
  );
};
