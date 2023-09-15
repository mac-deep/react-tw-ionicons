import React, { SVGProps } from 'react'

type CloseCircleSharpProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function CloseCircleSharp({ extraStyles, ...rest }: CloseCircleSharpProps) {
  const defaultProps: CloseCircleSharpProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: CloseCircleSharpProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <path d="M256,48C141.31,48,48,141.31,48,256s93.31,208,208,208,208-93.31,208-208S370.69,48,256,48Zm86.63,272L320,342.63l-64-64-64,64L169.37,320l64-64-64-64L192,169.37l64,64,64-64L342.63,192l-64,64Z" />
      </svg>
    </>
  )
}
