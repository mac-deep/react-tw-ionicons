import React, { SVGProps } from 'react'

type TabletLandscapeOutlineProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function TabletLandscapeOutline({ extraStyles, ...rest }: TabletLandscapeOutlineProps) {
  const defaultProps: TabletLandscapeOutlineProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: TabletLandscapeOutlineProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <rect
          x="80"
          y="16"
          width="352"
          height="480"
          rx="48"
          ry="48"
          transform="translate(0 512) rotate(-90)"
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
