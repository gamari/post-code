import { cn } from '@/src/libs/utils';
import React from 'react'

interface Props {
    text: string;
    className?: string;
}

export const NoContent = ({
    text,
    className
}: Props) => {
  return (
    <div className={cn("p-6 border rounded-md flex items-center justify-center text-gray-600", className)}>
        {text}
    </div>
  )
}
