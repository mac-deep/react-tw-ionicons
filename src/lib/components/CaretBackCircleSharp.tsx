import React, { SVGProps } from 'react'

type CaretBackCircleSharpProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function CaretBackCircleSharp({ extraStyles, ...rest }: CaretBackCircleSharpProps) {
  const defaultProps: CaretBackCircleSharpProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: CaretBackCircleSharpProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <path d="M48,256c0,114.87,93.13,208,208,208s208-93.13,208-208S370.87,48,256,48,48,141.13,48,256ZM300,364.27,169.91,256,300,147.73Z" />
      </svg>
    </>
  )
}
