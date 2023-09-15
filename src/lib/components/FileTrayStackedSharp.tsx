import React, { SVGProps } from 'react'

type FileTrayStackedSharpProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function FileTrayStackedSharp({ extraStyles, ...rest }: FileTrayStackedSharpProps) {
  const defaultProps: FileTrayStackedSharpProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: FileTrayStackedSharpProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <path d="M448,16H64L32,176V320H480V176ZM436,176H320a64,64,0,0,1-128,0H76L98,58H414Z" />
        <path d="M320,352a64,64,0,0,1-128,0H32V496H480V352Z" />
      </svg>
    </>
  )
}
