import React, { SVGProps } from 'react'

type CaretForwardCircleSharpProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function CaretForwardCircleSharp({ extraStyles, ...rest }: CaretForwardCircleSharpProps) {
  const defaultProps: CaretForwardCircleSharpProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: CaretForwardCircleSharpProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <path d="M464,256c0-114.87-93.13-208-208-208S48,141.13,48,256s93.13,208,208,208S464,370.87,464,256ZM212,147.73,342.09,256,212,364.27Z" />
      </svg>
    </>
  )
}
