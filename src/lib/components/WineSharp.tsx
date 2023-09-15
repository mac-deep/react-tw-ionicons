import React, { SVGProps } from 'react'

type WineSharpProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function WineSharp({ extraStyles, ...rest }: WineSharpProps) {
  const defaultProps: WineSharpProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: WineSharpProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <path d="M453,112V66.33H60.75V112L235.88,288V406H124.75v42H389V406H277.88V288Zm-336.65-3.67h281l-37.81,38H154.16Z" />
      </svg>
    </>
  )
}
