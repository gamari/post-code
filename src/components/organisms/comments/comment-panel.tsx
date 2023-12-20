import React from "react";

import { SlideIn } from "../../molecules/animation/SlideIn";
import { Comment } from "@/src/types";

interface Props {
  comment?: Comment;
}

export const CommentPanel = ({ comment }: Props) => {
  return <SlideIn from="left">CodeCommentPanel</SlideIn>;
};
