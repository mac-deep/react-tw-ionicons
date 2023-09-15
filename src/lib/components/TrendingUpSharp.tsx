import React, { SVGProps } from 'react'

type TrendingUpSharpProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function TrendingUpSharp({ extraStyles, ...rest }: TrendingUpSharpProps) {
  const defaultProps: TrendingUpSharpProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: TrendingUpSharpProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <polyline
          points="352 144 464 144 464 256"
          style={{
            fill: 'none',
            stroke: 'currentColor',
            strokeLinecap: 'square',
            strokeMiterlimit: '10',
            strokeWidth: '32px',
          }}
        />
        <polyline
          points="48 368 192 224 288 320 448 160"
          style={{
            fill: 'none',
            stroke: 'currentColor',
            strokeLinecap: 'square',
            strokeMiterlimit: '10',
            strokeWidth: '32px',
          }}
        />
      </svg>
    </>
  )
}
