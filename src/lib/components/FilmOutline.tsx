import React, { SVGProps } from 'react'

type FilmOutlineProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function FilmOutline({ extraStyles, ...rest }: FilmOutlineProps) {
  const defaultProps: FilmOutlineProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: FilmOutlineProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <rect
          x="48"
          y="96"
          width="416"
          height="320"
          rx="28"
          ry="28"
          style={{ fill: 'none', stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: '32px' }}
        />
        <rect
          x="384"
          y="336"
          width="80"
          height="80"
          rx="28"
          ry="28"
          style={{ fill: 'none', stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: '32px' }}
        />
        <rect
          x="384"
          y="256"
          width="80"
          height="80"
          rx="28"
          ry="28"
          style={{ fill: 'none', stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: '32px' }}
        />
        <rect
          x="384"
          y="176"
          width="80"
          height="80"
          rx="28"
          ry="28"
          style={{ fill: 'none', stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: '32px' }}
        />
        <rect
          x="384"
          y="96"
          width="80"
          height="80"
          rx="28"
          ry="28"
          style={{ fill: 'none', stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: '32px' }}
        />
        <rect
          x="48"
          y="336"
          width="80"
          height="80"
          rx="28"
          ry="28"
          style={{ fill: 'none', stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: '32px' }}
        />
        <rect
          x="48"
          y="256"
          width="80"
          height="80"
          rx="28"
          ry="28"
          style={{ fill: 'none', stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: '32px' }}
        />
        <rect
          x="48"
          y="176"
          width="80"
          height="80"
          rx="28"
          ry="28"
          style={{ fill: 'none', stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: '32px' }}
        />
        <rect
          x="48"
          y="96"
          width="80"
          height="80"
          rx="28"
          ry="28"
          style={{ fill: 'none', stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: '32px' }}
        />
        <rect
          x="128"
          y="96"
          width="256"
          height="160"
          rx="28"
          ry="28"
          style={{ fill: 'none', stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: '32px' }}
        />
        <rect
          x="128"
          y="256"
          width="256"
          height="160"
          rx="28"
          ry="28"
          style={{ fill: 'none', stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: '32px' }}
        />
      </svg>
    </>
  )
}
