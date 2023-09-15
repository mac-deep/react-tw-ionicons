import React, { SVGProps } from 'react'

type MapSharpProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function MapSharp({ extraStyles, ...rest }: MapSharpProps) {
  const defaultProps: MapSharpProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: MapSharpProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <path d="M327.71,130.93,184,39,32,144V480l152.29-98.93L328,473,480,368V32ZM312,421,200,349V91l112,72Z" />
      </svg>
    </>
  )
}
