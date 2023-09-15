import React, { SVGProps } from 'react'

type CaretUpSharpProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function CaretUpSharp({ extraStyles, ...rest }: CaretUpSharpProps) {
  const defaultProps: CaretUpSharpProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: CaretUpSharpProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <polygon points="448 368 256 144 64 368 448 368" />
      </svg>
    </>
  )
}
