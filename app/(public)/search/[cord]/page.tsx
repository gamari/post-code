import React from "react";

interface Props {
  params: {
    cord: string;
  };
}

const Page = ({ params: { cord } }: Props) => {
  return <div>{cord}</div>;
};

export default Page;
