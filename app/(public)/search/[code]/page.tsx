import React from "react";
import { SearchSection } from "./search-section";
import { SearchCodeResult } from "./search-code-result";

interface Props {
  params: {
    code: string;
  };
}

const Page = ({ params: { code } }: Props) => {
  return (
    <div>
      <SearchSection>
        <SearchCodeResult code={code} />
      </SearchSection>
    </div>
  );
};

export default Page;
