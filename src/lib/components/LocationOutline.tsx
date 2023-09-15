import React, { SVGProps } from 'react'

type LocationOutlineProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function LocationOutline({ extraStyles, ...rest }: LocationOutlineProps) {
  const defaultProps: LocationOutlineProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: LocationOutlineProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <path
          d="M256,48c-79.5,0-144,61.39-144,137,0,87,96,224.87,131.25,272.49a15.77,15.77,0,0,0,25.5,0C304,409.89,400,272.07,400,185,400,109.39,335.5,48,256,48Z"
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
          cy="192"
          r="48"
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
