import React, { SVGProps } from 'react'

type ReorderTwoProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function ReorderTwo({ extraStyles, ...rest }: ReorderTwoProps) {
  const defaultProps: ReorderTwoProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: ReorderTwoProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <line
          x1="118"
          y1="304"
          x2="394"
          y2="304"
          style={{
            fill: 'none',
            stroke: 'currentColor',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '44px',
          }}
        />
        <line
          x1="118"
          y1="208"
          x2="394"
          y2="208"
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
