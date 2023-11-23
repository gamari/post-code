"use client";

import React, { FunctionComponent } from 'react'

import { BadCode } from '@/lib/types'

interface Props {
    code: BadCode;
}

export const CodeEditor: FunctionComponent<Props> = ({
    code
}) => {
  return (
    <div>
        {code.code_id}
    </div>
  )
}
