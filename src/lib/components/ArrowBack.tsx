import React, { SVGProps } from 'react'

type ArrowBackProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function ArrowBack({ extraStyles, ...rest }: ArrowBackProps) {
  const defaultProps: ArrowBackProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: ArrowBackProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <polyline
          points="244 400 100 256 244 112"
          style={{
            fill: 'none',
            stroke: 'currentColor',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '48px',
          }}
        />
        <line
          x1="120"
          y1="256"
          x2="412"
          y2="256"
          style={{
            fill: 'none',
            stroke: 'currentColor',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '48px',
          }}
        />
      </svg>
    </>
  )
}
