import React, { SVGProps } from 'react'

type SquareSharpProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function SquareSharp({ extraStyles, ...rest }: SquareSharpProps) {
  const defaultProps: SquareSharpProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: SquareSharpProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <rect x="48" y="48" width="416" height="416" />
      </svg>
    </>
  )
}
