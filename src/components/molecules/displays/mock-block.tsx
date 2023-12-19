import React, { FunctionComponent } from "react";

interface Props {
  width?: number;
  height?: number;
  text?: string;
  className?: string;
}

export const MockBlock: FunctionComponent<Props> = ({
  width,
  height,
  text,
  className = "",
}) => {
  return (
    <div
      style={{
        width: width ? width : "100%",
        height: height ? height : "100%",
        backgroundColor: "#ccc",
      }}
      className={className}
    >
      {text}
    </div>
  );
};
