import React, { SVGProps } from 'react'

type TvSharpProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function TvSharp({ extraStyles, ...rest }: TvSharpProps) {
  const defaultProps: TvSharpProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: TvSharpProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <path d="M488,384H24a8,8,0,0,1-8-8V88a8,8,0,0,1,8-8H488a8,8,0,0,1,8,8V376A8,8,0,0,1,488,384Z" />
        <rect x="112" y="400" width="288" height="32" rx="4" ry="4" />
      </svg>
    </>
  )
}
