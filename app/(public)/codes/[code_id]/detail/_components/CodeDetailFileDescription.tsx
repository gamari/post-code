import React, { useState } from "react";

import { MarkdownPreviewer } from "@/src/components/molecules/displays/markdown-previewer";
import { useCodeDetailContext } from "@/src/contexts/CodeDetailProvider";
import { cn } from "@/src/libs/utils";
import { Badge } from "@/src/components/atoms/badges/badge";
import { motion } from "framer-motion";

interface Props {
  className?: string;
}

const containerVariants = {
  // コンポーネントを下に隠す
  hidden: { y: "100%", opacity: 1 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
};

export const CodeDetailFileDescription = ({ className = "" }: Props) => {
  const [isShow, setIsShow] = useState(true);
  const { selectedFile } = useCodeDetailContext();

  if (!selectedFile?.description) return null;

  const toggleShow = () => {
    setIsShow(!isShow);
  };

  return (
    <div className={cn("fixed z-[103]  bottom-6 w-full max-w-3xl", className)}>
      <motion.div
        initial="hidden"
        animate={isShow ? "visible" : "hidden"}
        variants={containerVariants}
        transition={{ duration: 0.5 }}
        className="relative border border-gray-400 bg-white rounded-lg  shadow-lg "
      >
        <Badge className="absolute z-[104] -top-2 left-2">コード説明</Badge>
        <div className="overflow-y-auto py-12 px-8 max-h-[30vh]">
          <MarkdownPreviewer content={selectedFile?.description || ""} />
        </div>
        <div
          className="absolute top-0 -translate-y-[100%] right-0 mb-2 mr-2 bg-gray-500 text-white p-4 rounded-t-lg cursor-pointer"
          onClick={toggleShow}
        >
          {isShow ? "非表示" : "表示"}
        </div>
      </motion.div>
    </div>
  );
};
