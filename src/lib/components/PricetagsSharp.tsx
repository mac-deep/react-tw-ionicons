import React, { SVGProps } from 'react'

type PricetagsSharpProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function PricetagsSharp({ extraStyles, ...rest }: PricetagsSharpProps) {
  const defaultProps: PricetagsSharpProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: PricetagsSharpProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <path d="M288,16,0,304,176,480,464,192V16Zm80,128a32,32,0,1,1,32-32A32,32,0,0,1,368,144Z" />
        <polygon points="480 64 480 208 216.9 471.1 242 496 512 224 512 64 480 64" />
      </svg>
    </>
  )
}
