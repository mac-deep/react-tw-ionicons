import React, { SVGProps } from 'react'

type GlassesSharpProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function GlassesSharp({ extraStyles, ...rest }: GlassesSharpProps) {
  const defaultProps: GlassesSharpProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: GlassesSharpProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <path d="M496,176H16v64H37.24L49.68,352H221.55L240,241.32V240a16,16,0,0,1,32,0v1.32L290.45,352H462.32l12.44-112H496Z" />
      </svg>
    </>
  )
}
