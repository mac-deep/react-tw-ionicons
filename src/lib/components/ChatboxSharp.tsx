import React, { SVGProps } from 'react'

type ChatboxSharpProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function ChatboxSharp({ extraStyles, ...rest }: ChatboxSharpProps) {
  const defaultProps: ChatboxSharpProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: ChatboxSharpProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <path d="M128,464V384H56a24,24,0,0,1-24-24V72A24,24,0,0,1,56,48H456a24,24,0,0,1,24,24V360a24,24,0,0,1-24,24H245.74ZM456,80h0Z" />
      </svg>
    </>
  )
}
