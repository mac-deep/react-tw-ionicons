import React, { SVGProps } from 'react'

type EllipsisHorizontalOutlineProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function EllipsisHorizontalOutline({ extraStyles, ...rest }: EllipsisHorizontalOutlineProps) {
  const defaultProps: EllipsisHorizontalOutlineProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: EllipsisHorizontalOutlineProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <circle
          cx="256"
          cy="256"
          r="32"
          style={{ fill: 'none', stroke: 'currentColor', strokeMiterlimit: '10', strokeWidth: '32px' }}
        />
        <circle
          cx="416"
          cy="256"
          r="32"
          style={{ fill: 'none', stroke: 'currentColor', strokeMiterlimit: '10', strokeWidth: '32px' }}
        />
        <circle
          cx="96"
          cy="256"
          r="32"
          style={{ fill: 'none', stroke: 'currentColor', strokeMiterlimit: '10', strokeWidth: '32px' }}
        />
      </svg>
    </>
  )
}
