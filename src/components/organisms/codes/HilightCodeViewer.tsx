import React from "react";

interface Props {
  code: string;
  query: string;
}

export const HilightCodeViewer = ({ code, query }: Props) => {
  const renderHighlightedCodeWithLineNumbers = () => {
    if (!query)
      return code.split("\n").map((line, index) => (
        <div key={index}>
          {index + 1}: {line}
        </div>
      ));

    const lines = code.split("\n");
    const matchIndex = lines.findIndex((line) => line.includes(query));

    return lines.map((line, index) => {
      const isHighlighted = index === matchIndex;
      const style = isHighlighted ? { color: "orange" } : {};

      return (
        <div key={index} className="flex flex-row gap-2 whitespace-pre">
          <span style={{ width: "30px", textAlign: "right" }} className="border-r pr-2">{index + 1}</span>
          <span style={style}>{line}</span>
        </div>
      );
    });
  };

  return <div>{renderHighlightedCodeWithLineNumbers()}</div>;
};
