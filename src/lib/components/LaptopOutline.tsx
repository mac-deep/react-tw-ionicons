import React, { SVGProps } from 'react'

type LaptopOutlineProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function LaptopOutline({ extraStyles, ...rest }: LaptopOutlineProps) {
  const defaultProps: LaptopOutlineProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: LaptopOutlineProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <rect
          x="48"
          y="96"
          width="416"
          height="304"
          rx="32.14"
          ry="32.14"
          style={{ fill: 'none', stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: '32px' }}
        />
        <line
          x1="16"
          y1="416"
          x2="496"
          y2="416"
          style={{ stroke: 'currentColor', strokeLinecap: 'round', strokeMiterlimit: '10', strokeWidth: '32px' }}
        />
      </svg>
    </>
  )
}
