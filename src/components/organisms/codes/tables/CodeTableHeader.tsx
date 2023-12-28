import React from "react";

export const CodeTableHeader = () => {
  return (
    <div className="bg-gray-100 w-full grid grid-cols-9 lg:grid-cols-10 ">
      <div></div>
      <div className="col-span-4 flex flex-row p-2 font-bold text-gray-700">
        タイトル
      </div>
      <div className="hidden lg:block"></div>
      <div className="hidden lg:block p-2 font-bold text-gray-700">言語</div>
      <div className="p-2 font-bold text-gray-700">更新</div>
      <div className="col-span-2"></div>
    </div>
  );
};
