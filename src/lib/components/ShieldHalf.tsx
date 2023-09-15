import React, { SVGProps } from 'react'

type ShieldHalfProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function ShieldHalf({ extraStyles, ...rest }: ShieldHalfProps) {
  const defaultProps: ShieldHalfProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: ShieldHalfProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg id="icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <path
          d="M48.9,112.37C138.32,96.33,175.29,84.45,256,48c80.71,36.45,117.68,48.33,207.1,64.37C479.3,369.13,271.42,457.79,256,464,240.58,457.79,32.7,369.13,48.9,112.37Z"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="32"
        />
        <path d="M256,48c80.71,36.45,117.68,48.33,207.1,64.37C479.3,369.13,271.42,457.79,256,464Z" />
      </svg>
    </>
  )
}
