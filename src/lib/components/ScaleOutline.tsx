import React, { SVGProps } from 'react'

type ScaleOutlineProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function ScaleOutline({ extraStyles, ...rest }: ScaleOutlineProps) {
  const defaultProps: ScaleOutlineProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: ScaleOutlineProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg id="icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <rect
          x="48"
          y="48"
          width="416"
          height="416"
          rx="96"
          fill="none"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="32"
        />
        <path
          d="M388.94,151.56c-24.46-22.28-68.72-51.4-132.94-51.4s-108.48,29.12-132.94,51.4A34.66,34.66,0,0,0,120,199.64l33.32,39.21a26.07,26.07,0,0,0,33.6,5.21c15.92-9.83,40.91-21.64,69.1-21.64s53.18,11.81,69.1,21.64a26.07,26.07,0,0,0,33.6-5.21L392,199.64A34.66,34.66,0,0,0,388.94,151.56Z"
          fill="none"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="32"
        />
      </svg>
    </>
  )
}
