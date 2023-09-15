import React, { SVGProps } from 'react'

type ArrowDownSharpProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function ArrowDownSharp({ extraStyles, ...rest }: ArrowDownSharpProps) {
  const defaultProps: ArrowDownSharpProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: ArrowDownSharpProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <polyline
          points="112 268 256 412 400 268"
          style={{
            fill: 'none',
            stroke: 'currentColor',
            strokeLinecap: 'square',
            strokeMiterlimit: '10',
            strokeWidth: '48px',
          }}
        />
        <line
          x1="256"
          y1="392"
          x2="256"
          y2="100"
          style={{
            fill: 'none',
            stroke: 'currentColor',
            strokeLinecap: 'square',
            strokeMiterlimit: '10',
            strokeWidth: '48px',
          }}
        />
      </svg>
    </>
  )
}
