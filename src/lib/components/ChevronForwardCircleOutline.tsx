import React, { SVGProps } from 'react'

type ChevronForwardCircleOutlineProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function ChevronForwardCircleOutline({ extraStyles, ...rest }: ChevronForwardCircleOutlineProps) {
  const defaultProps: ChevronForwardCircleOutlineProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: ChevronForwardCircleOutlineProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <path
          d="M64,256c0,106,86,192,192,192s192-86,192-192S362,64,256,64,64,150,64,256Z"
          style={{ fill: 'none', stroke: 'currentColor', strokeMiterlimit: '10', strokeWidth: '32px' }}
        />
        <polyline
          points="216 352 312 256 216 160"
          style={{
            fill: 'none',
            stroke: 'currentColor',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '32px',
          }}
        />
      </svg>
    </>
  )
}
