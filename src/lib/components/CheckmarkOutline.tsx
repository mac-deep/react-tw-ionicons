import React, { SVGProps } from 'react'

type CheckmarkOutlineProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function CheckmarkOutline({ extraStyles, ...rest }: CheckmarkOutlineProps) {
  const defaultProps: CheckmarkOutlineProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: CheckmarkOutlineProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <polyline
          points="416 128 192 384 96 288"
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
