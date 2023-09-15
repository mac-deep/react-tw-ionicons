import React, { SVGProps } from 'react'

type PaperPlaneSharpProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function PaperPlaneSharp({ extraStyles, ...rest }: PaperPlaneSharpProps) {
  const defaultProps: PaperPlaneSharpProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: PaperPlaneSharpProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <polygon points="496 16 15.88 208 195 289 448 64 223 317 304 496 496 16" />
      </svg>
    </>
  )
}
