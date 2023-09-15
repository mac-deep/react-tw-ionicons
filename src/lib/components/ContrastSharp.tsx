import React, { SVGProps } from 'react'

type ContrastSharpProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function ContrastSharp({ extraStyles, ...rest }: ContrastSharpProps) {
  const defaultProps: ContrastSharpProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: ContrastSharpProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <path d="M256,32C132.29,32,32,132.29,32,256S132.29,480,256,480,480,379.71,480,256,379.71,32,256,32ZM128.72,383.28A180,180,0,0,1,256,76V436A178.82,178.82,0,0,1,128.72,383.28Z" />
      </svg>
    </>
  )
}
