import React, { SVGProps } from 'react'

type ArrowUpOutlineProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function ArrowUpOutline({ extraStyles, ...rest }: ArrowUpOutlineProps) {
  const defaultProps: ArrowUpOutlineProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: ArrowUpOutlineProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <polyline
          points="112 244 256 100 400 244"
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
          y1="120"
          x2="256"
          y2="412"
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
