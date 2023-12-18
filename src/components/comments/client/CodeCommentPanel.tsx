"use client";

import React from "react";
import { SlideIn } from "../../base/client/animations/SlideIn";
import { Comment } from "@/src/types";

interface Props {
  comment?: Comment;
}

export const CodeCommentPanel = ({ comment }: Props) => {
  return <SlideIn from="left">CodeCommentPanel</SlideIn>;
};
