import React, { SVGProps } from 'react'

type CloudDownloadOutlineProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function CloudDownloadOutline({ extraStyles, ...rest }: CloudDownloadOutlineProps) {
  const defaultProps: CloudDownloadOutlineProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: CloudDownloadOutlineProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <path
          d="M320,336h76c55,0,100-21.21,100-75.6s-53-73.47-96-75.6C391.11,99.74,329,48,256,48c-69,0-113.44,45.79-128,91.2-60,5.7-112,35.88-112,98.4S70,336,136,336h56"
          style={{
            fill: 'none',
            stroke: 'currentColor',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '32px',
          }}
        />
        <polyline
          points="192 400.1 256 464 320 400.1"
          style={{
            fill: 'none',
            stroke: 'currentColor',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '32px',
          }}
        />
        <line
          x1="256"
          y1="224"
          x2="256"
          y2="448.03"
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
