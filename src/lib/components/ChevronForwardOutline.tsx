import React, { SVGProps } from 'react'

type ChevronForwardOutlineProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function ChevronForwardOutline({ extraStyles, ...rest }: ChevronForwardOutlineProps) {
  const defaultProps: ChevronForwardOutlineProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: ChevronForwardOutlineProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <polyline
          points="184 112 328 256 184 400"
          style={{
            fill: 'none',
            stroke: 'currentColor',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '48px',
          }}
        />
      </svg>
    </>
  )
}
