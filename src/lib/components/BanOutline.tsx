import React, { SVGProps } from 'react'

type BanOutlineProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function BanOutline({ extraStyles, ...rest }: BanOutlineProps) {
  const defaultProps: BanOutlineProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: BanOutlineProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg id="icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <circle cx="256" cy="256" r="208" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32" />
        <line
          x1="108.92"
          y1="108.92"
          x2="403.08"
          y2="403.08"
          fill="none"
          stroke="currentColor"
          strokeMiterlimit="10"
          strokeWidth="32"
        />
      </svg>
    </>
  )
}
