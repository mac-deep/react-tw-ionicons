import React, { SVGProps } from 'react'

type ThermometerSharpProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function ThermometerSharp({ extraStyles, ...rest }: ThermometerSharpProps) {
  const defaultProps: ThermometerSharpProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: ThermometerSharpProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <path d="M320,291.24V80a64,64,0,1,0-128,0V291.24A113.39,113.39,0,0,0,144,384a112,112,0,0,0,224,0A113.39,113.39,0,0,0,320,291.24ZM256,432a48,48,0,0,1-16-93.26V96h32V338.74A48,48,0,0,1,256,432Z" />
      </svg>
    </>
  )
}
