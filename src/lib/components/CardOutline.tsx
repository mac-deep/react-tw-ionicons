import React, { SVGProps } from 'react'

type CardOutlineProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function CardOutline({ extraStyles, ...rest }: CardOutlineProps) {
  const defaultProps: CardOutlineProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: CardOutlineProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <rect
          x="48"
          y="96"
          width="416"
          height="320"
          rx="56"
          ry="56"
          style={{
            fill: 'none',
            stroke: 'currentColor',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '32px',
          }}
        />
        <line
          x1="48"
          y1="192"
          x2="464"
          y2="192"
          style={{ fill: 'none', stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: '60px' }}
        />
        <rect
          x="128"
          y="300"
          width="48"
          height="20"
          style={{ fill: 'none', stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: '60px' }}
        />
      </svg>
    </>
  )
}
