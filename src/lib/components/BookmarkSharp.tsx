import React, { SVGProps } from 'react'

type BookmarkSharpProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function BookmarkSharp({ extraStyles, ...rest }: BookmarkSharpProps) {
  const defaultProps: BookmarkSharpProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: BookmarkSharpProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <path d="M416,480,256,357.41,96,480V32H416Z" />
      </svg>
    </>
  )
}
