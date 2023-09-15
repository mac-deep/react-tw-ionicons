import React, { SVGProps } from 'react'

type GitCompareOutlineProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function GitCompareOutline({ extraStyles, ...rest }: GitCompareOutlineProps) {
  const defaultProps: GitCompareOutlineProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: GitCompareOutlineProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <polyline
          points="304 160 240 96 304 32"
          style={{
            fill: 'none',
            stroke: 'currentColor',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '32px',
          }}
        />
        <polyline
          points="207 352 271 416 207 480"
          style={{
            fill: 'none',
            stroke: 'currentColor',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '32px',
          }}
        />
        <circle
          cx="112"
          cy="96"
          r="48"
          style={{
            fill: 'none',
            stroke: 'currentColor',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '32px',
          }}
        />
        <circle
          cx="400"
          cy="416"
          r="48"
          style={{
            fill: 'none',
            stroke: 'currentColor',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '32px',
          }}
        />
        <path
          d="M256,96h84a60,60,0,0,1,60,60V368"
          style={{
            fill: 'none',
            stroke: 'currentColor',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '32px',
          }}
        />
        <path
          d="M255,416H171a60,60,0,0,1-60-60V144"
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
