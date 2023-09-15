import React, { SVGProps } from 'react'

type CubeSharpProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function CubeSharp({ extraStyles, ...rest }: CubeSharpProps) {
  const defaultProps: CubeSharpProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: CubeSharpProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <polygon points="48 170 48 366.92 240 480 240 284 48 170" />
        <path d="M272,480,464,366.92V170L272,284ZM448,357.64h0Z" />
        <polygon points="448 144 256 32 64 144 256 256 448 144" />
      </svg>
    </>
  )
}
