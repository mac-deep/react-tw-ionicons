import React, { SVGProps } from 'react'

type ArrowForwardCircleOutlineProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function ArrowForwardCircleOutline({ extraStyles, ...rest }: ArrowForwardCircleOutlineProps) {
  const defaultProps: ArrowForwardCircleOutlineProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: ArrowForwardCircleOutlineProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <polyline
          points="262.62 336 342 256 262.62 176"
          style={{
            fill: 'none',
            stroke: 'currentColor',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '32px',
          }}
        />
        <line
          x1="330.97"
          y1="256"
          x2="170"
          y2="256"
          style={{
            fill: 'none',
            stroke: 'currentColor',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '32px',
          }}
        />
        <path
          d="M256,448c106,0,192-86,192-192S362,64,256,64,64,150,64,256,150,448,256,448Z"
          style={{ fill: 'none', stroke: 'currentColor', strokeMiterlimit: '10', strokeWidth: '32px' }}
        />
      </svg>
    </>
  )
}
