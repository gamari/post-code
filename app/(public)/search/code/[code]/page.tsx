import React from "react";

import { SearchSection } from "../../search-section";
import { SearchCodeResult } from "./search-code-result";

interface Props {
  params: {
    code: string;
  };
}

const Page = ({ params: { code } }: Props) => {
  return (
    <SearchSection className="max-w-4xl">
      <SearchCodeResult code={code} />
    </SearchSection>
  );
};

export default Page;
