import React from 'react'
import { Typo } from '../../atoms/texts/typo';

interface Props {
    message: string;
}

export const ErrorMessage = ({
    message
}: Props) => {
  return (
    <Typo text={message} className="text-red-500" />
  )
}
