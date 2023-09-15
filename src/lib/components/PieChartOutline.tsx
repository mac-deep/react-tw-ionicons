import React, { SVGProps } from 'react'

type PieChartOutlineProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function PieChartOutline({ extraStyles, ...rest }: PieChartOutlineProps) {
  const defaultProps: PieChartOutlineProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: PieChartOutlineProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <path
          d="M256.05,80.65Q263.94,80,272,80c106,0,192,86,192,192S378,464,272,464A192.09,192.09,0,0,1,89.12,330.65"
          style={{
            fill: 'none',
            stroke: 'currentColor',
            strokeLinecap: 'round',
            strokeMiterlimit: '10',
            strokeWidth: '32px',
          }}
        />
        <path
          d="M256,48C141.12,48,48,141.12,48,256a207.29,207.29,0,0,0,18.09,85L256,256Z"
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
