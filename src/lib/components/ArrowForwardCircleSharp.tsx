import React, { SVGProps } from 'react'

type ArrowForwardCircleSharpProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function ArrowForwardCircleSharp({ extraStyles, ...rest }: ArrowForwardCircleSharpProps) {
  const defaultProps: ArrowForwardCircleSharpProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: ArrowForwardCircleSharpProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <path d="M464,256c0-114.87-93.13-208-208-208S48,141.13,48,256s93.13,208,208,208S464,370.87,464,256ZM240,336.09,303.58,272H154V240H303.58L240,175.91l22.71-22.54L364.54,256,262.7,358.63Z" />
      </svg>
    </>
  )
}
