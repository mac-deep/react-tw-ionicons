import React, { SVGProps } from 'react'

type AlbumsSharpProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function AlbumsSharp({ extraStyles, ...rest }: AlbumsSharpProps) {
  const defaultProps: AlbumsSharpProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: AlbumsSharpProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <rect x="128" y="64" width="256" height="32" />
        <rect x="96" y="112" width="320" height="32" />
        <path d="M464,448H48V160H464Z" />
      </svg>
    </>
  )
}
