import React, { SVGProps } from 'react'

type LinkOutlineProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function LinkOutline({ extraStyles, ...rest }: LinkOutlineProps) {
  const defaultProps: LinkOutlineProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: LinkOutlineProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <path
          d="M208,352H144a96,96,0,0,1,0-192h64"
          style={{
            fill: 'none',
            stroke: 'currentColor',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '36px',
          }}
        />
        <path
          d="M304,160h64a96,96,0,0,1,0,192H304"
          style={{
            fill: 'none',
            stroke: 'currentColor',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '36px',
          }}
        />
        <line
          x1="163.29"
          y1="256"
          x2="350.71"
          y2="256"
          style={{
            fill: 'none',
            stroke: 'currentColor',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '36px',
          }}
        />
      </svg>
    </>
  )
}
