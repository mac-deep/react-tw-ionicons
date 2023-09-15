import React, { SVGProps } from 'react'

type BatteryDeadOutlineProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function BatteryDeadOutline({ extraStyles, ...rest }: BatteryDeadOutlineProps) {
  const defaultProps: BatteryDeadOutlineProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: BatteryDeadOutlineProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <rect
          x="31"
          y="144"
          width="400"
          height="224"
          rx="45.7"
          ry="45.7"
          style={{
            fill: 'none',
            stroke: 'currentColor',
            strokeLinecap: 'square',
            strokeMiterlimit: '10',
            strokeWidth: '32px',
          }}
        />
        <line
          x1="479"
          y1="218.67"
          x2="479"
          y2="293.33"
          style={{
            fill: 'none',
            stroke: 'currentColor',
            strokeLinecap: 'round',
            strokeMiterlimit: '10',
            strokeWidth: '32px',
          }}
        />
      </svg>
    </>
  )
}
