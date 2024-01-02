import { Flex } from "@/src/components/atoms/containers/Flex";
import React from "react";
import { AboutSentence } from "./about-sentence";

export const AboutResolve = () => {
  return (
    <Flex direction="column" alignItems="center" gap={12}>
      <div className="text-sky-600 font-bold text-2xl">解決すること</div>

      <AboutSentence>
        <div>
          PostCodeでは「具体」である「コード」をシェアすることで、ビギナーや初学者に寄り添った情報を提供します。
        </div>
        <div>
          従来の投稿サイトの問題点として「抽象的で分からない」というものがありました。
        </div>
        <div>
          PostCodeでは具体である「コード」をシェアしやすくすることで、そういった抽象的な話題を、具体に落とし込みやすくしています。
        </div>
        <div>
          結果として、「どうすればいいの？」という疑問を解決してくれます。
        </div>
      </AboutSentence>
    </Flex>
  );
};
