import React, { SVGProps } from 'react'

type ArrowBackCircleSharpProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function ArrowBackCircleSharp({ extraStyles, ...rest }: ArrowBackCircleSharpProps) {
  const defaultProps: ArrowBackCircleSharpProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: ArrowBackCircleSharpProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <path d="M48,256c0,114.87,93.13,208,208,208s208-93.13,208-208S370.87,48,256,48,48,141.13,48,256Zm224-80.09L208.42,240H358v32H208.42L272,336.09,249.3,358.63,147.46,256,249.3,153.37Z" />
      </svg>
    </>
  )
}
