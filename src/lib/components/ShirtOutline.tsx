import React, { SVGProps } from 'react'

type ShirtOutlineProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function ShirtOutline({ extraStyles, ...rest }: ShirtOutlineProps) {
  const defaultProps: ShirtOutlineProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: ShirtOutlineProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <path
          d="M314.56,48S291.78,56,256,56s-58.56-8-58.56-8a31.94,31.94,0,0,0-10.57,1.8L32,104l16.63,88,48.88,5.52A24,24,0,0,1,118.8,222.1L112,464H400l-6.8-241.9a24,24,0,0,1,21.29-24.58L463.37,192,480,104,325.13,49.8A31.94,31.94,0,0,0,314.56,48Z"
          style={{
            fill: 'none',
            stroke: 'currentColor',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '32px',
          }}
        />
        <path
          d="M333.31,52.66a80,80,0,0,1-154.62,0"
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
