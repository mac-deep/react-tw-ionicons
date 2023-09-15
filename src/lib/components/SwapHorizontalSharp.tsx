import React, { SVGProps } from 'react'

type SwapHorizontalSharpProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function SwapHorizontalSharp({ extraStyles, ...rest }: SwapHorizontalSharpProps) {
  const defaultProps: SwapHorizontalSharpProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: SwapHorizontalSharpProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <polyline
          points="304 48 416 160 304 272"
          style={{
            fill: 'none',
            stroke: 'currentColor',
            strokeLinecap: 'square',
            strokeMiterlimit: '10',
            strokeWidth: '32px',
          }}
        />
        <line
          x1="398.87"
          y1="160"
          x2="96"
          y2="160"
          style={{
            fill: 'none',
            stroke: 'currentColor',
            strokeLinecap: 'square',
            strokeMiterlimit: '10',
            strokeWidth: '32px',
          }}
        />
        <polyline
          points="208 464 96 352 208 240"
          style={{
            fill: 'none',
            stroke: 'currentColor',
            strokeLinecap: 'square',
            strokeMiterlimit: '10',
            strokeWidth: '32px',
          }}
        />
        <line
          x1="114"
          y1="352"
          x2="416"
          y2="352"
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
