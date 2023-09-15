import React, { SVGProps } from 'react'

type InformationSharpProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function InformationSharp({ extraStyles, ...rest }: InformationSharpProps) {
  const defaultProps: InformationSharpProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: InformationSharpProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <polyline
          points="196 220 260 220 260 392"
          style={{
            fill: 'none',
            stroke: 'currentColor',
            strokeLinecap: 'square',
            strokeMiterlimit: '10',
            strokeWidth: '40px',
          }}
        />
        <line
          x1="187"
          y1="396"
          x2="325"
          y2="396"
          style={{
            fill: 'none',
            stroke: 'currentColor',
            strokeLinecap: 'square',
            strokeMiterlimit: '10',
            strokeWidth: '40px',
          }}
        />
        <path d="M256,160a32,32,0,1,1,32-32A32,32,0,0,1,256,160Z" />
      </svg>
    </>
  )
}
