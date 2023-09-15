import React, { SVGProps } from 'react'

type CodeDownloadProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function CodeDownload({ extraStyles, ...rest }: CodeDownloadProps) {
  const defaultProps: CodeDownloadProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: CodeDownloadProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <polyline
          points="160 368 32 256 160 144"
          style={{
            fill: 'none',
            stroke: 'currentColor',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '42px',
          }}
        />
        <polyline
          points="352 368 480 256 352 144"
          style={{
            fill: 'none',
            stroke: 'currentColor',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '42px',
          }}
        />
        <polyline
          points="192 288.1 256 352 320 288.1"
          style={{
            fill: 'none',
            stroke: 'currentColor',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '42px',
          }}
        />
        <line
          x1="256"
          y1="160"
          x2="256"
          y2="336.03"
          style={{
            fill: 'none',
            stroke: 'currentColor',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '42px',
          }}
        />
      </svg>
    </>
  )
}
