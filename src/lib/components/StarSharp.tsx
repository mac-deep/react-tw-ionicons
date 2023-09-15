import React, { SVGProps } from 'react'

type StarSharpProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function StarSharp({ extraStyles, ...rest }: StarSharpProps) {
  const defaultProps: StarSharpProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: StarSharpProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <path d="M496,203.3H312.36L256,32,199.64,203.3H16L166.21,308.7,107.71,480,256,373.84,404.29,480,345.68,308.7Z" />
      </svg>
    </>
  )
}
