import React, { SVGProps } from 'react'

type TriangleSharpProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function TriangleSharp({ extraStyles, ...rest }: TriangleSharpProps) {
  const defaultProps: TriangleSharpProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: TriangleSharpProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <polygon points="256 32 20 464 492 464 256 32" />
      </svg>
    </>
  )
}
