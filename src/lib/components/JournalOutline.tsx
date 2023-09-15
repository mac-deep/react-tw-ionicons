import React, { SVGProps } from 'react'

type JournalOutlineProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function JournalOutline({ extraStyles, ...rest }: JournalOutlineProps) {
  const defaultProps: JournalOutlineProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: JournalOutlineProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <rect
          x="96"
          y="48"
          width="320"
          height="416"
          rx="48"
          ry="48"
          style={{ fill: 'none', stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: '32px' }}
        />
        <line
          x1="320"
          y1="48"
          x2="320"
          y2="464"
          style={{ fill: 'none', stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: '60px' }}
        />
      </svg>
    </>
  )
}
