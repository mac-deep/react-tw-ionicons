import React, { SVGProps } from 'react'

type CaretDownSharpProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function CaretDownSharp({ extraStyles, ...rest }: CaretDownSharpProps) {
  const defaultProps: CaretDownSharpProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: CaretDownSharpProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <polygon points="64 144 256 368 448 144 64 144" />
      </svg>
    </>
  )
}
