import React, { SVGProps } from 'react'

type CutOutlineProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function CutOutline({ extraStyles, ...rest }: CutOutlineProps) {
  const defaultProps: CutOutlineProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: CutOutlineProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <circle
          cx="104"
          cy="152"
          r="56"
          style={{
            fill: 'none',
            stroke: 'currentColor',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '32px',
          }}
        />
        <circle
          cx="104"
          cy="360"
          r="56"
          style={{
            fill: 'none',
            stroke: 'currentColor',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '32px',
          }}
        />
        <path
          d="M157,175,146,190,183,205s3.46-6.42,7-10Z"
          style={{
            fill: 'none',
            stroke: 'currentColor',
            strokeLinecap: 'square',
            strokeMiterlimit: '10',
            strokeWidth: '32px',
          }}
        />
        <path
          d="M154.17,334.43,460,162c-2.5-6.7-28-12-64-4-29.12,6.47-121.16,29.05-159.16,56.05C205.85,236.06,227,272,192,298c-25.61,19-44.43,22.82-44.43,22.82Z"
          style={{
            fill: 'none',
            stroke: 'currentColor',
            strokeLinecap: 'round',
            strokeMiterlimit: '10',
            strokeWidth: '32px',
          }}
        />
        <path
          d="M344.47,278.24,295,306.67c14.23,6.74,65.54,33.27,117,36.33,14.92.89,30,.39,39-6Z"
          style={{
            fill: 'none',
            stroke: 'currentColor',
            strokeLinecap: 'round',
            strokeMiterlimit: '10',
            strokeWidth: '32px',
          }}
        />
        <circle
          cx="256"
          cy="240"
          r="32"
          style={{ fill: 'none', stroke: 'currentColor', strokeMiterlimit: '10', strokeWidth: '32px' }}
        />
      </svg>
    </>
  )
}
