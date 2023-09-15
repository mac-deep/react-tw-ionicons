import React, { SVGProps } from 'react'

type BookmarksSharpProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function BookmarksSharp({ extraStyles, ...rest }: BookmarksSharpProps) {
  const defaultProps: BookmarksSharpProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: BookmarksSharpProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <polygon points="112 0 112 48 416 48 416 416 464 448 464 0 112 0" />
        <polygon points="48 80 48 512 216 388 384 512 384 80 48 80" />
      </svg>
    </>
  )
}
