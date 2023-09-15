import React, { SVGProps } from 'react'

type ChatboxProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function Chatbox({ extraStyles, ...rest }: ChatboxProps) {
  const defaultProps: ChatboxProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: ChatboxProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <path d="M144,464a16,16,0,0,1-16-16V384H104a72.08,72.08,0,0,1-72-72V120a72.08,72.08,0,0,1,72-72H408a72.08,72.08,0,0,1,72,72V312a72.08,72.08,0,0,1-72,72H245.74l-91.49,76.29A16.05,16.05,0,0,1,144,464Z" />
      </svg>
    </>
  )
}
