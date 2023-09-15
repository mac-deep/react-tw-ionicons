import React, { SVGProps } from 'react'

type StarHalfSharpProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function StarHalfSharp({ extraStyles, ...rest }: StarHalfSharpProps) {
  const defaultProps: StarHalfSharpProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: StarHalfSharpProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <path d="M496,203.3H312.36L256,32,199.64,203.3H16L166.21,308.7,107.71,480,256,373.84,404.29,480,345.68,308.7ZM274.63,347.82,256,334.49V134.39l26,78.91,7.24,22H394.63l-67.32,47.2-19.69,13.81,7.78,22.75,26.26,76.75Z" />
      </svg>
    </>
  )
}
