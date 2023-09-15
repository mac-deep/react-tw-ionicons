import React, { SVGProps } from 'react'

type AlbumsOutlineProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function AlbumsOutline({ extraStyles, ...rest }: AlbumsOutlineProps) {
  const defaultProps: AlbumsOutlineProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: AlbumsOutlineProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <rect
          x="64"
          y="176"
          width="384"
          height="256"
          rx="28.87"
          ry="28.87"
          style={{ fill: 'none', stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: '32px' }}
        />
        <line
          x1="144"
          y1="80"
          x2="368"
          y2="80"
          style={{ stroke: 'currentColor', strokeLinecap: 'round', strokeMiterlimit: '10', strokeWidth: '32px' }}
        />
        <line
          x1="112"
          y1="128"
          x2="400"
          y2="128"
          style={{ stroke: 'currentColor', strokeLinecap: 'round', strokeMiterlimit: '10', strokeWidth: '32px' }}
        />
      </svg>
    </>
  )
}
