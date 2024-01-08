import { actionGetCodeById } from "@/src/actions/codes";
import { CodeIcon } from "@/src/components/atoms/icons/code-icon";
import { ImageResponse } from "next/og";

// Route segment config
export const runtime = "edge";

export const alt = "PostCode";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

// Image generation
export default async function Image({
  params,
}: {
  params: {
    code_id: number;
  };
}) {
  const code = await actionGetCodeById(params?.code_id);
  const title = code?.title || "(タイトルなし)";

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 48,
          background: "white",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
        }}
      >
        <div
          style={{
            height: 40,
            backgroundColor: "rgb(224, 242, 254)",
            width: "100%",
          }}
        />
        <h1
          style={{
            flex: 1,
            maxWidth: "80%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 48,
          }}
        >
          {title}
        </h1>

        <div
          style={{
            display: "flex",
            position: "absolute",
            alignItems: "center",
            bottom: 48,
            right: 48,
            gap: 16,
          }}
        >
          <CodeIcon />
          <span>PostCode</span>
        </div>
        <div
          style={{
            height: 40,
            backgroundColor: "rgb(224, 242, 254)",
            width: "100%",
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}
