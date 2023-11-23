import React, { FunctionComponent } from 'react'

interface Props {
    children: React.ReactNode
}

const DashboardLayout: FunctionComponent<Props> = ({
    children
}) => {
  return (
    <div className='w-full flex flex-row'>{children}</div>
  )
}

export default DashboardLayout