import React, { SVGProps } from 'react'

type ScanProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function Scan({ extraStyles, ...rest }: ScanProps) {
  const defaultProps: ScanProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: ScanProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <path
          d="M342,444h46a56,56,0,0,0,56-56V342"
          style={{
            fill: 'none',
            stroke: 'currentColor',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '44px',
          }}
        />
        <path
          d="M444,170V124a56,56,0,0,0-56-56H342"
          style={{
            fill: 'none',
            stroke: 'currentColor',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '44px',
          }}
        />
        <path
          d="M170,444H124a56,56,0,0,1-56-56V342"
          style={{
            fill: 'none',
            stroke: 'currentColor',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '44px',
          }}
        />
        <path
          d="M68,170V124a56,56,0,0,1,56-56h46"
          style={{
            fill: 'none',
            stroke: 'currentColor',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '44px',
          }}
        />
      </svg>
    </>
  )
}
