import React, { SVGProps } from 'react'

type PrismSharpProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function PrismSharp({ extraStyles, ...rest }: PrismSharpProps) {
  const defaultProps: PrismSharpProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: PrismSharpProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg id="icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <path d="M256,16,16,352,256,496,496,352Zm-20,96.82V437.35L73.73,340Z" />
      </svg>
    </>
  )
}
