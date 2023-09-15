import React, { SVGProps } from 'react'

type CaretDownCircleSharpProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function CaretDownCircleSharp({ extraStyles, ...rest }: CaretDownCircleSharpProps) {
  const defaultProps: CaretDownCircleSharpProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: CaretDownCircleSharpProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <path d="M464,256c0-114.87-93.13-208-208-208S48,141.13,48,256s93.13,208,208,208S464,370.87,464,256Zm-99.73-44L256,342.09,147.73,212Z" />
      </svg>
    </>
  )
}
