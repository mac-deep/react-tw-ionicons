import React, { SVGProps } from 'react'

type BicycleOutlineProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function BicycleOutline({ extraStyles, ...rest }: BicycleOutlineProps) {
  const defaultProps: BicycleOutlineProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: BicycleOutlineProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <path
          d="M388,288a76,76,0,1,0,76,76,76.24,76.24,0,0,0-76-76Z"
          style={{ fill: 'none', stroke: 'currentColor', strokeMiterlimit: '10', strokeWidth: '32px' }}
        />
        <path
          d="M124,288a76,76,0,1,0,76,76,76.24,76.24,0,0,0-76-76Z"
          style={{ fill: 'none', stroke: 'currentColor', strokeMiterlimit: '10', strokeWidth: '32px' }}
        />
        <polyline
          points="256 360 256 274 192 232 272 144 312 216 368 216"
          style={{
            fill: 'none',
            stroke: 'currentColor',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '32px',
          }}
        />
        <path d="M320,136a31.89,31.89,0,0,0,32-32.1A31.55,31.55,0,0,0,320.2,72a32,32,0,1,0-.2,64Z" />
      </svg>
    </>
  )
}
