import React, { SVGProps } from 'react'

type PlaySkipForwardSharpProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function PlaySkipForwardSharp({ extraStyles, ...rest }: PlaySkipForwardSharpProps) {
  const defaultProps: PlaySkipForwardSharpProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: PlaySkipForwardSharpProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <polygon points="368.53 64 368.53 227.52 96 64 96 448 368.53 284.48 368.53 448 416 448 416 64 368.53 64" />
      </svg>
    </>
  )
}
