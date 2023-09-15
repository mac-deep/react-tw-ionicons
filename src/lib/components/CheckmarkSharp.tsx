import React, { SVGProps } from 'react'

type CheckmarkSharpProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function CheckmarkSharp({ extraStyles, ...rest }: CheckmarkSharpProps) {
  const defaultProps: CheckmarkSharpProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: CheckmarkSharpProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <polyline
          points="416 128 192 384 96 288"
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
