import React, { SVGProps } from 'react'

type PushSharpProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function PushSharp({ extraStyles, ...rest }: PushSharpProps) {
  const defaultProps: PushSharpProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: PushSharpProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <path d="M272,352V204.63l64,64L358.63,246,256,143.37,153.37,246,176,268.63l64-64V352H92a12,12,0,0,1-12-12V44A12,12,0,0,1,92,32H420a12,12,0,0,1,12,12V340a12,12,0,0,1-12,12Z" />
        <rect x="240" y="352" width="32" height="128" />
      </svg>
    </>
  )
}
