import React, { SVGProps } from 'react'

type CaretBackSharpProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function CaretBackSharp({ extraStyles, ...rest }: CaretBackSharpProps) {
  const defaultProps: CaretBackSharpProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: CaretBackSharpProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <polygon points="368 64 144 256 368 448 368 64" />
      </svg>
    </>
  )
}
