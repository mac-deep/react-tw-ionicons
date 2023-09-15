import React, { SVGProps } from 'react'

type CaretForwardSharpProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function CaretForwardSharp({ extraStyles, ...rest }: CaretForwardSharpProps) {
  const defaultProps: CaretForwardSharpProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: CaretForwardSharpProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <polygon points="144 448 368 256 144 64 144 448" />
      </svg>
    </>
  )
}
