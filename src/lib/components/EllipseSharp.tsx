import React, { SVGProps } from 'react'

type EllipseSharpProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function EllipseSharp({ extraStyles, ...rest }: EllipseSharpProps) {
  const defaultProps: EllipseSharpProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: EllipseSharpProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <path d="M256,464C141.31,464,48,370.69,48,256S141.31,48,256,48s208,93.31,208,208S370.69,464,256,464Z" />
      </svg>
    </>
  )
}
