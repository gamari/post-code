import { cn } from "@/src/libs/utils";
import { motion } from "framer-motion";
import React, { useState } from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const containerVariants = {
  // コンポーネントを下に隠す
  hidden: { y: "100%", transition: { duration: 0.5 } },
  visible: { y: 0, transition: { duration: 0.5 } },
};

const BottomToggleContainer = ({ children, className }: Props) => {
  const [isShow, setIsShow] = useState(true);

  const toggleShow = () => {
    setIsShow(!isShow);
  };

  return (
    <div className={cn("fixed z-[103]  bottom-6 w-full max-w-4xl px-2")}>
      <motion.div
        initial="hidden"
        animate={isShow ? "visible" : "hidden"}
        variants={containerVariants}
        transition={{ duration: 0.5 }}
        className={cn(
          "relative border border-gray-400 bg-white rounded-lg  shadow-lg",
          className
        )}
      >
        {children}
        <div
          className="absolute top-0 -translate-y-[100%] right-0 mb-2 mr-2 bg-gray-500 text-white px-4 py-2 rounded-t-lg cursor-pointer"
          onClick={toggleShow}
        >
          {isShow ? "非表示" : "表示"}
        </div>
      </motion.div>
    </div>
  );
};

export default BottomToggleContainer;
