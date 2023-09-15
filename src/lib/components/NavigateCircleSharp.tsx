import React, { SVGProps } from 'react'

type NavigateCircleSharpProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function NavigateCircleSharp({ extraStyles, ...rest }: NavigateCircleSharpProps) {
  const defaultProps: NavigateCircleSharpProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: NavigateCircleSharpProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <path d="M256,48h0A208.23,208.23,0,0,0,48,256c0,114.68,93.31,208,208,208h0A208.23,208.23,0,0,0,464,256C464,141.31,370.69,48,256,48Zm-8,361V264H104l-1,0,259-114.11Z" />
      </svg>
    </>
  )
}
