import React, { SVGProps } from 'react'

type PhonePortraitOutlineProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function PhonePortraitOutline({ extraStyles, ...rest }: PhonePortraitOutlineProps) {
  const defaultProps: PhonePortraitOutlineProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: PhonePortraitOutlineProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <rect
          x="128"
          y="16"
          width="256"
          height="480"
          rx="48"
          ry="48"
          style={{
            fill: 'none',
            stroke: 'currentColor',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '32px',
          }}
        />
        <path
          d="M176,16h24a8,8,0,0,1,8,8h0a16,16,0,0,0,16,16h64a16,16,0,0,0,16-16h0a8,8,0,0,1,8-8h24"
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
