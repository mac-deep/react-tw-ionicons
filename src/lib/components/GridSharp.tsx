import React, { SVGProps } from 'react'

type GridSharpProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function GridSharp({ extraStyles, ...rest }: GridSharpProps) {
  const defaultProps: GridSharpProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: GridSharpProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <path d="M240,240H32V32H240Z" />
        <path d="M480,240H272V32H480Z" />
        <path d="M240,480H32V272H240Z" />
        <path d="M480,480H272V272H480Z" />
      </svg>
    </>
  )
}
