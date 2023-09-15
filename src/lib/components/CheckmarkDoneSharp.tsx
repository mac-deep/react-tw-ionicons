import React, { SVGProps } from 'react'

type CheckmarkDoneSharpProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function CheckmarkDoneSharp({ extraStyles, ...rest }: CheckmarkDoneSharpProps) {
  const defaultProps: CheckmarkDoneSharpProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: CheckmarkDoneSharpProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <polyline
          points="465 127 241 384 149 292"
          style={{
            fill: 'none',
            stroke: 'currentColor',
            strokeLinecap: 'square',
            strokeMiterlimit: '10',
            strokeWidth: '44px',
          }}
        />
        <line
          x1="140"
          y1="385"
          x2="47"
          y2="292"
          style={{
            fill: 'none',
            stroke: 'currentColor',
            strokeLinecap: 'square',
            strokeMiterlimit: '10',
            strokeWidth: '44px',
          }}
        />
        <line
          x1="363"
          y1="127"
          x2="236"
          y2="273"
          style={{
            fill: 'none',
            stroke: 'currentColor',
            strokeLinecap: 'square',
            strokeMiterlimit: '10',
            strokeWidth: '44px',
          }}
        />
      </svg>
    </>
  )
}
