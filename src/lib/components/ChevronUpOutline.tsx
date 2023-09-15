import React, { SVGProps } from 'react'

type ChevronUpOutlineProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function ChevronUpOutline({ extraStyles, ...rest }: ChevronUpOutlineProps) {
  const defaultProps: ChevronUpOutlineProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: ChevronUpOutlineProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <polyline
          points="112 328 256 184 400 328"
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
