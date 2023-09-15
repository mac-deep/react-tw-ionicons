import React, { SVGProps } from 'react'

type ToggleOutlineProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function ToggleOutline({ extraStyles, ...rest }: ToggleOutlineProps) {
  const defaultProps: ToggleOutlineProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: ToggleOutlineProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <circle
          cx="368"
          cy="256"
          r="128"
          style={{ fill: 'none', stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: '32px' }}
        />
        <rect
          x="16"
          y="128"
          width="480"
          height="256"
          rx="128"
          ry="128"
          style={{ fill: 'none', stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: '32px' }}
        />
      </svg>
    </>
  )
}
