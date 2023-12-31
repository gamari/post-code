import React from "react";
import { unstable_noStore } from "next/cache";

import { SearchSection } from "../../search-section";
import { SearchCodeResult } from "./search-code-result";

interface Props {
  params: {
    code: string;
  };
}

const Page = ({ params: { code } }: Props) => {
  unstable_noStore();

  return (
    <div>
      <SearchSection className="max-w-4xl">
        <SearchCodeResult code={code} />
      </SearchSection>
    </div>
  );
};

export default Page;
