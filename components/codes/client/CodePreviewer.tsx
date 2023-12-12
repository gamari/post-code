"use client";

import React from 'react'

interface Props {
    code: string;
}

export const CodePreviewer = ({
    code
}: Props) => {
  return (
    <div className='p-3 border overflow-y-scroll h-full w-full'>{code}</div>
  )
}
