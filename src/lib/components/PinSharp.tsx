import React, { SVGProps } from 'react'

type PinSharpProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function PinSharp({ extraStyles, ...rest }: PinSharpProps) {
  const defaultProps: PinSharpProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: PinSharpProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <path d="M339,99a83,83,0,1,0-102,80.8V464l19,32,19-32V179.8A83.28,83.28,0,0,0,339,99Zm-59-6a21,21,0,1,1,21-21A21,21,0,0,1,280,93Z" />
      </svg>
    </>
  )
}
