import React, { SVGProps } from 'react'

type CodeWorkingSharpProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function CodeWorkingSharp({ extraStyles, ...rest }: CodeWorkingSharpProps) {
  const defaultProps: CodeWorkingSharpProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: CodeWorkingSharpProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <circle
          cx="256"
          cy="256"
          r="26"
          style={{ stroke: 'currentColor', strokeLinecap: 'square', strokeMiterlimit: '10', strokeWidth: '10px' }}
        />
        <circle
          cx="346"
          cy="256"
          r="26"
          style={{ stroke: 'currentColor', strokeLinecap: 'square', strokeMiterlimit: '10', strokeWidth: '10px' }}
        />
        <circle
          cx="166"
          cy="256"
          r="26"
          style={{ stroke: 'currentColor', strokeLinecap: 'square', strokeMiterlimit: '10', strokeWidth: '10px' }}
        />
        <polyline
          points="160 368 32 256 160 144"
          style={{
            fill: 'none',
            stroke: 'currentColor',
            strokeLinecap: 'square',
            strokeMiterlimit: '10',
            strokeWidth: '42px',
          }}
        />
        <polyline
          points="352 368 480 256 352 144"
          style={{
            fill: 'none',
            stroke: 'currentColor',
            strokeLinecap: 'square',
            strokeMiterlimit: '10',
            strokeWidth: '42px',
          }}
        />
      </svg>
    </>
  )
}
