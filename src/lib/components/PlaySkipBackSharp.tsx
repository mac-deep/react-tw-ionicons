import React, { SVGProps } from 'react'

type PlaySkipBackSharpProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function PlaySkipBackSharp({ extraStyles, ...rest }: PlaySkipBackSharpProps) {
  const defaultProps: PlaySkipBackSharpProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: PlaySkipBackSharpProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <polygon points="143.47 64 143.47 227.52 416 64 416 448 143.47 284.48 143.47 448 96 448 96 64 143.47 64" />
      </svg>
    </>
  )
}
