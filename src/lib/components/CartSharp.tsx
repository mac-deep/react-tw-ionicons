import React, { SVGProps } from 'react'

type CartSharpProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function CartSharp({ extraStyles, ...rest }: CartSharpProps) {
  const defaultProps: CartSharpProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: CartSharpProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <circle cx="176" cy="416" r="32" />
        <circle cx="400" cy="416" r="32" />
        <polygon points="167.78 304 429.12 304 467.52 112 133.89 112 125.42 64 32 64 32 96 98.58 96 146.58 368 432 368 432 336 173.42 336 167.78 304" />
      </svg>
    </>
  )
}
