import React, { SVGProps } from 'react'

type ReorderThreeProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function ReorderThree({ extraStyles, ...rest }: ReorderThreeProps) {
  const defaultProps: ReorderThreeProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: ReorderThreeProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <line
          x1="102"
          y1="256"
          x2="410"
          y2="256"
          style={{
            fill: 'none',
            stroke: 'currentColor',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '44px',
          }}
        />
        <line
          x1="102"
          y1="176"
          x2="410"
          y2="176"
          style={{
            fill: 'none',
            stroke: 'currentColor',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '44px',
          }}
        />
        <line
          x1="102"
          y1="336"
          x2="410"
          y2="336"
          style={{
            fill: 'none',
            stroke: 'currentColor',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '44px',
          }}
        />
      </svg>
    </>
  )
}
