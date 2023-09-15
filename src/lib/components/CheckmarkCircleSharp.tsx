import React, { SVGProps } from 'react'

type CheckmarkCircleSharpProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function CheckmarkCircleSharp({ extraStyles, ...rest }: CheckmarkCircleSharpProps) {
  const defaultProps: CheckmarkCircleSharpProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: CheckmarkCircleSharpProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <path d="M256,48C141.31,48,48,141.31,48,256s93.31,208,208,208,208-93.31,208-208S370.69,48,256,48ZM218,360.38,137.4,270.81l23.79-21.41,56,62.22L350,153.46,374.54,174Z" />
      </svg>
    </>
  )
}
