"use client";

import { Comment } from "@/src/types";
import { ReactNode, createContext, useContext, useState } from "react";

interface ContextProps {
  comments: Comment[];
  addComments: (newComments: Comment[]) => void;
}

interface ProviderProps {
  children: ReactNode;
  comments: Comment[];
}

export const CodeCommentListContext = createContext<ContextProps>({
  comments: [],
  addComments: () => {},
});

export const CodeCommentListProvider = ({
  children,
  comments: initComments,
}: ProviderProps) => {
  const [comments, setComments] = useState<Comment[]>(initComments || []);

  function addComments(newComments: Comment[]) {
    setComments([...comments, ...newComments]);
  }

  return (
    <CodeCommentListContext.Provider value={{ comments, addComments }}>
      {children}
    </CodeCommentListContext.Provider>
  );
};

export const useCodeCommentList = () => {
  return useContext(CodeCommentListContext);
};
