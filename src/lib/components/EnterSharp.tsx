import React, { SVGProps } from 'react'

type EnterSharpProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function EnterSharp({ extraStyles, ...rest }: EnterSharpProps) {
  const defaultProps: EnterSharpProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: EnterSharpProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <path d="M160,240H307.37l-64-64L266,153.37,368.63,256,266,358.63,243.37,336l64-64H160V420a12,12,0,0,0,12,12H468a12,12,0,0,0,12-12V92a12,12,0,0,0-12-12H172a12,12,0,0,0-12,12Z" />
        <rect x="32" y="240" width="128" height="32" />
      </svg>
    </>
  )
}
