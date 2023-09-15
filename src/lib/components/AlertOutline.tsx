import React, { SVGProps } from 'react'

type AlertOutlineProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function AlertOutline({ extraStyles, ...rest }: AlertOutlineProps) {
  const defaultProps: AlertOutlineProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: AlertOutlineProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <path
          d="M256,80c-8.66,0-16.58,7.36-16,16l8,216a8,8,0,0,0,8,8h0a8,8,0,0,0,8-8l8-216C272.58,87.36,264.66,80,256,80Z"
          style={{
            fill: 'none',
            stroke: 'currentColor',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '32px',
          }}
        />
        <circle
          cx="256"
          cy="416"
          r="16"
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
