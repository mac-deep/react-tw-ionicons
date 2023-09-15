import React, { SVGProps } from 'react'

type PricetagSharpProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function PricetagSharp({ extraStyles, ...rest }: PricetagSharpProps) {
  const defaultProps: PricetagSharpProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: PricetagSharpProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <path d="M304,32,16,320,192,496,480,208V32Zm80,128a32,32,0,1,1,32-32A32,32,0,0,1,384,160Z" />
      </svg>
    </>
  )
}
