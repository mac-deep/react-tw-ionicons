import React, { SVGProps } from 'react'

type EllipsisHorizontalProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function EllipsisHorizontal({ extraStyles, ...rest }: EllipsisHorizontalProps) {
  const defaultProps: EllipsisHorizontalProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: EllipsisHorizontalProps = { ...defaultProps, ...rest }
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
