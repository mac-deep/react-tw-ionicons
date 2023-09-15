import React, { SVGProps } from 'react'

type TerminalOutlineProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function TerminalOutline({ extraStyles, ...rest }: TerminalOutlineProps) {
  const defaultProps: TerminalOutlineProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: TerminalOutlineProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <rect
          x="32"
          y="48"
          width="448"
          height="416"
          rx="48"
          ry="48"
          style={{ fill: 'none', stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: '32px' }}
        />
        <polyline
          points="96 112 176 176 96 240"
          style={{
            fill: 'none',
            stroke: 'currentColor',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '32px',
          }}
        />
        <line
          x1="192"
          y1="240"
          x2="256"
          y2="240"
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
