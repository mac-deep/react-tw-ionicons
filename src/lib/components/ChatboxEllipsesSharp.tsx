import React, { SVGProps } from 'react'

type ChatboxEllipsesSharpProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function ChatboxEllipsesSharp({ extraStyles, ...rest }: ChatboxEllipsesSharpProps) {
  const defaultProps: ChatboxEllipsesSharpProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: ChatboxEllipsesSharpProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <path d="M456,48H56A24,24,0,0,0,32,72V360a24,24,0,0,0,24,24h72v80l117.74-80H456a24,24,0,0,0,24-24V72A24,24,0,0,0,456,48ZM160,248a32,32,0,1,1,32-32A32,32,0,0,1,160,248Zm96,0a32,32,0,1,1,32-32A32,32,0,0,1,256,248Zm96,0a32,32,0,1,1,32-32A32,32,0,0,1,352,248ZM456,80h0Z" />
      </svg>
    </>
  )
}
