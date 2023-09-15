import React, { SVGProps } from 'react'

type EllipsisHorizontalSharpProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function EllipsisHorizontalSharp({ extraStyles, ...rest }: EllipsisHorizontalSharpProps) {
  const defaultProps: EllipsisHorizontalSharpProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: EllipsisHorizontalSharpProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <circle cx="256" cy="256" r="48" />
        <circle cx="416" cy="256" r="48" />
        <circle cx="96" cy="256" r="48" />
      </svg>
    </>
  )
}
