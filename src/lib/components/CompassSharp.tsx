import React, { SVGProps } from 'react'

type CompassSharpProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function CompassSharp({ extraStyles, ...rest }: CompassSharpProps) {
  const defaultProps: CompassSharpProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: CompassSharpProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <circle cx="256" cy="256" r="24" />
        <path d="M256,48C141.31,48,48,141.31,48,256s93.31,208,208,208,208-93.31,208-208S370.69,48,256,48Zm48,256L144,368l64-160,160-64Z" />
      </svg>
    </>
  )
}
