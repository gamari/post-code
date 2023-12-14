"use client";

import { Button } from "@/src/components/ui/button";
import { Textarea } from "@/src/components/ui/textarea";
import { useSupabase } from "@/src/components/providers/supabase-provider/supabase-provider";
import { fetchCreateComment } from "@/src/libs/externals/supabase/queries/comments";
import React from "react";
import { useToast } from "../../ui/use-toast";
import { useCodeCommentList } from "../../providers/CodeCommentListProvider";

interface Props {
  codeId: number;
}

export const CodeCommentForm = ({ codeId }: Props) => {
  const { client } = useSupabase();
  const { toast } = useToast();
  const { addComments } = useCodeCommentList();

  const [comment, setComment] = React.useState("");

  const handleCreateComment = async () => {
    if (!client) return;

    const retComment = await fetchCreateComment(codeId, comment, client);

    addComments([retComment]);
    setComment("");
    toast({
      title: "コメントを投稿しました",
    });
  };

  return (
    <div>
      <Textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="コメントを入力"
      />

      <div className="flex flex-row-reverse mt-3">
        <Button onClick={handleCreateComment}>コメントする</Button>
      </div>
    </div>
  );
};
