import React, { SVGProps } from 'react'

type TvOutlineProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function TvOutline({ extraStyles, ...rest }: TvOutlineProps) {
  const defaultProps: TvOutlineProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: TvOutlineProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <rect
          x="32"
          y="96"
          width="448"
          height="272"
          rx="32.14"
          ry="32.14"
          style={{ fill: 'none', stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: '32px' }}
        />
        <line
          x1="128"
          y1="416"
          x2="384"
          y2="416"
          style={{ stroke: 'currentColor', strokeLinecap: 'round', strokeMiterlimit: '10', strokeWidth: '32px' }}
        />
      </svg>
    </>
  )
}
