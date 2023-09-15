import React, { SVGProps } from 'react'

type BagRemoveOutlineProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function BagRemoveOutline({ extraStyles, ...rest }: BagRemoveOutlineProps) {
  const defaultProps: BagRemoveOutlineProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: BagRemoveOutlineProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <line
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="32"
          x1="320"
          y1="320"
          x2="192"
          y2="320"
        />
        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="32"
          fillRule="evenodd"
          d="M80,176a16,16,0,0,0-16,16V408c0,30.24,25.76,56,56,56H392c30.24,0,56-24.51,56-54.75V192a16,16,0,0,0-16-16Z"
        />
        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="32"
          fillRule="evenodd"
          d="M160,176V144a96,96,0,0,1,96-96h0a96,96,0,0,1,96,96v32"
        />
      </svg>
    </>
  )
}
