import React, { SVGProps } from 'react'

type ThunderstormProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function Thunderstorm({ extraStyles, ...rest }: ThunderstormProps) {
  const defaultProps: ThunderstormProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: ThunderstormProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <path d="M96,416a16,16,0,0,1-14.3-23.16l24-48a16,16,0,0,1,28.62,14.32l-24,48A16,16,0,0,1,96,416Z" />
        <path d="M120,480a16,16,0,0,1-14.3-23.16l16-32a16,16,0,0,1,28.62,14.32l-16,32A16,16,0,0,1,120,480Z" />
        <path d="M376,416a16,16,0,0,1-14.3-23.16l24-48a16,16,0,0,1,28.62,14.32l-24,48A16,16,0,0,1,376,416Z" />
        <path d="M400,480a16,16,0,0,1-14.3-23.16l16-32a16,16,0,0,1,28.62,14.32l-16,32A16,16,0,0,1,400,480Z" />
        <path d="M405.84,136.9A151.25,151.25,0,0,0,358.24,55a153,153,0,0,0-241.81,51.86C60.5,110.16,16,156.65,16,213.33,16,272.15,63.91,320,122.8,320h66.31l-12.89,77.37A16,16,0,0,0,192,416h32v64a16,16,0,0,0,29,9.3l80-112A16,16,0,0,0,320,352H292.49l8-32H404.33a91.56,91.56,0,0,0,1.51-183.1Z" />
      </svg>
    </>
  )
}
