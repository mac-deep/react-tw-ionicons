import React, { SVGProps } from 'react'

type ArrowDownOutlineProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function ArrowDownOutline({ extraStyles, ...rest }: ArrowDownOutlineProps) {
  const defaultProps: ArrowDownOutlineProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: ArrowDownOutlineProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <polyline
          points="112 268 256 412 400 268"
          style={{
            fill: 'none',
            stroke: 'currentColor',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '48px',
          }}
        />
        <line
          x1="256"
          y1="392"
          x2="256"
          y2="100"
          style={{
            fill: 'none',
            stroke: 'currentColor',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '48px',
          }}
        />
      </svg>
    </>
  )
}
