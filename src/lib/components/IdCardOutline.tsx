import React, { SVGProps } from 'react'

type IdCardOutlineProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function IdCardOutline({ extraStyles, ...rest }: IdCardOutlineProps) {
  const defaultProps: IdCardOutlineProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: IdCardOutlineProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg id="icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <rect
          x="96"
          y="32"
          width="320"
          height="448"
          rx="48"
          fill="none"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="32"
        />
        <line
          x1="208"
          y1="80"
          x2="304"
          y2="80"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="32"
        />
        <path d="M333.48,284.51A39.65,39.65,0,0,0,304,272c-11.6,0-22.09,4.41-29.54,12.43s-11.2,19.12-10.34,31C265.83,338.91,283.72,358,304,358s38.14-19.09,39.87-42.55C344.75,303.67,341.05,292.68,333.48,284.51Z" />
        <path d="M371.69,448H236.31a12.05,12.05,0,0,1-9.31-4.17,13,13,0,0,1-2.76-10.92c3.25-17.56,13.38-32.31,29.3-42.66C267.68,381.06,285.6,376,304,376s36.32,5.06,50.46,14.25c15.92,10.35,26.05,25.1,29.3,42.66A13,13,0,0,1,381,443.83,12.05,12.05,0,0,1,371.69,448Z" />
      </svg>
    </>
  )
}
