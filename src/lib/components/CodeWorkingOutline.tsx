import React, { SVGProps } from 'react'

type CodeWorkingOutlineProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function CodeWorkingOutline({ extraStyles, ...rest }: CodeWorkingOutlineProps) {
  const defaultProps: CodeWorkingOutlineProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: CodeWorkingOutlineProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <circle cx="256" cy="256" r="26" />
        <circle cx="346" cy="256" r="26" />
        <circle cx="166" cy="256" r="26" />
        <polyline
          points="160 368 32 256 160 144"
          style={{
            fill: 'none',
            stroke: 'currentColor',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '32px',
          }}
        />
        <polyline
          points="352 368 480 256 352 144"
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
