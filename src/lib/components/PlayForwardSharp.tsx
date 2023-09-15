import React, { SVGProps } from 'react'

type PlayForwardSharpProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function PlayForwardSharp({ extraStyles, ...rest }: PlayForwardSharpProps) {
  const defaultProps: PlayForwardSharpProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: PlayForwardSharpProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <polygon points="16 400 256 256 16 112 16 400" />
        <polygon points="256 400 496 256 256 112 256 400" />
      </svg>
    </>
  )
}
