import { useRouter } from "next/navigation";
import React, { useState } from "react";

interface Props {
  url: string;
}

export const LinkButton = ({ url }: Props) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  return <div>LinkButton</div>;
};
