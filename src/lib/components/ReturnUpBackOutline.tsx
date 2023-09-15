import React, { SVGProps } from 'react'

type ReturnUpBackOutlineProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function ReturnUpBackOutline({ extraStyles, ...rest }: ReturnUpBackOutlineProps) {
  const defaultProps: ReturnUpBackOutlineProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: ReturnUpBackOutlineProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <polyline
          points="112 160 48 224 112 288"
          style={{
            fill: 'none',
            stroke: 'currentColor',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '32px',
          }}
        />
        <path
          d="M64,224H358c58.76,0,106,49.33,106,108v20"
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
