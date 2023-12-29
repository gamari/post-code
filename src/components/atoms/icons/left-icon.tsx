import React from 'react'

import { IconProps } from '@/src/types/components';
import { FaArrowLeft } from "react-icons/fa6";

interface Props extends IconProps {
    className?: string;
}

export const LeftIcon = ({
    className
}: Props) => {
  return (
    <FaArrowLeft className={`h-6 w-6 ${className}`} />
  )
}
