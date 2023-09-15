import React, { SVGProps } from 'react'

type BrowsersOutlineProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function BrowsersOutline({ extraStyles, ...rest }: BrowsersOutlineProps) {
  const defaultProps: BrowsersOutlineProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: BrowsersOutlineProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <rect
          x="48"
          y="64"
          width="416"
          height="384"
          rx="48"
          ry="48"
          style={{ fill: 'none', stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: '32px' }}
        />
        <path d="M397.82,64H114.18C77.69,64,48,94.15,48,131.2V176H64c0-16,16-32,32-32H416c16,0,32,16,32,32h16V131.2C464,94.15,434.31,64,397.82,64Z" />
      </svg>
    </>
  )
}
