import React, { SVGProps } from 'react'

type ReturnDownBackSharpProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function ReturnDownBackSharp({ extraStyles, ...rest }: ReturnDownBackSharpProps) {
  const defaultProps: ReturnDownBackSharpProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: ReturnDownBackSharpProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <polyline
          points="112 352 48 288 112 224"
          style={{
            fill: 'none',
            stroke: 'currentColor',
            strokeLinecap: 'square',
            strokeMiterlimit: '10',
            strokeWidth: '32px',
          }}
        />
        <polyline
          points="64 288 464 288 464 160"
          style={{
            fill: 'none',
            stroke: 'currentColor',
            strokeLinecap: 'square',
            strokeMiterlimit: '10',
            strokeWidth: '32px',
          }}
        />
      </svg>
    </>
  )
}
