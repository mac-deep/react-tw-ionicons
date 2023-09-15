import React, { SVGProps } from 'react'

type AddProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function Add({ extraStyles, ...rest }: AddProps) {
  const defaultProps: AddProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: AddProps = { ...defaultProps, ...rest }
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
            strokeLinecap: 'round',
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
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '32px',
          }}
        />
      </svg>
    </>
  )
}
