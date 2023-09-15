import React, { SVGProps } from 'react'

type FlashOffSharpProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function FlashOffSharp({ extraStyles, ...rest }: FlashOffSharpProps) {
  const defaultProps: FlashOffSharpProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: FlashOffSharpProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <rect x="240.44" y="0.03" width="31.11" height="511.95" transform="translate(-106.04 256) rotate(-45)" />
        <polygon points="80 304 224 304 192 496 300.18 366.18 151.82 217.82 80 304" />
        <polygon points="432 208 288 208 320 16 211.82 145.82 360.18 294.18 432 208" />
      </svg>
    </>
  )
}
