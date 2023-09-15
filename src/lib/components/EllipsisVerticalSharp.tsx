import React, { SVGProps } from 'react'

type EllipsisVerticalSharpProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function EllipsisVerticalSharp({ extraStyles, ...rest }: EllipsisVerticalSharpProps) {
  const defaultProps: EllipsisVerticalSharpProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: EllipsisVerticalSharpProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <circle cx="256" cy="256" r="48" />
        <circle cx="256" cy="416" r="48" />
        <circle cx="256" cy="96" r="48" />
      </svg>
    </>
  )
}
