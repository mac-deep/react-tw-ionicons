import React, { SVGProps } from 'react'

type RemoveProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function Remove({ extraStyles, ...rest }: RemoveProps) {
  const defaultProps: RemoveProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: RemoveProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
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
