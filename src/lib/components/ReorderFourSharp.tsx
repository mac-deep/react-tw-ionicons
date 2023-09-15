import React, { SVGProps } from 'react'

type ReorderFourSharpProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function ReorderFourSharp({ extraStyles, ...rest }: ReorderFourSharpProps) {
  const defaultProps: ReorderFourSharpProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: ReorderFourSharpProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <line
          x1="102"
          y1="304"
          x2="410"
          y2="304"
          style={{
            fill: 'none',
            stroke: 'currentColor',
            strokeLinecap: 'square',
            strokeLinejoin: 'round',
            strokeWidth: '44px',
          }}
        />
        <line
          x1="102"
          y1="208"
          x2="410"
          y2="208"
          style={{
            fill: 'none',
            stroke: 'currentColor',
            strokeLinecap: 'square',
            strokeLinejoin: 'round',
            strokeWidth: '44px',
          }}
        />
        <line
          x1="102"
          y1="112"
          x2="410"
          y2="112"
          style={{
            fill: 'none',
            stroke: 'currentColor',
            strokeLinecap: 'square',
            strokeLinejoin: 'round',
            strokeWidth: '44px',
          }}
        />
        <line
          x1="102"
          y1="400"
          x2="410"
          y2="400"
          style={{
            fill: 'none',
            stroke: 'currentColor',
            strokeLinecap: 'square',
            strokeLinejoin: 'round',
            strokeWidth: '44px',
          }}
        />
      </svg>
    </>
  )
}
