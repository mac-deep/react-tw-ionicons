import React, { SVGProps } from 'react'

type SquareProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function Square({ extraStyles, ...rest }: SquareProps) {
  const defaultProps: SquareProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: SquareProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <path d="M416,464H96a48.05,48.05,0,0,1-48-48V96A48.05,48.05,0,0,1,96,48H416a48.05,48.05,0,0,1,48,48V416A48.05,48.05,0,0,1,416,464Z" />
      </svg>
    </>
  )
}
