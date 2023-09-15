import React, { SVGProps } from 'react'

type AddSharpProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function AddSharp({ extraStyles, ...rest }: AddSharpProps) {
  const defaultProps: AddSharpProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: AddSharpProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <line
          x1="256"
          y1="112"
          x2="256"
          y2="400"
          style={{
            fill: 'none',
            stroke: 'currentColor',
            strokeLinecap: 'square',
            strokeLinejoin: 'round',
            strokeWidth: '32px',
          }}
        />
        <line
          x1="400"
          y1="256"
          x2="112"
          y2="256"
          style={{
            fill: 'none',
            stroke: 'currentColor',
            strokeLinecap: 'square',
            strokeLinejoin: 'round',
            strokeWidth: '32px',
          }}
        />
      </svg>
    </>
  )
}
