import React, { SVGProps } from 'react'

type WaterSharpProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function WaterSharp({ extraStyles, ...rest }: WaterSharpProps) {
  const defaultProps: WaterSharpProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: WaterSharpProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <path d="M256,43.91s-144,158.3-144,270.3c0,88.36,55.64,144,144,144s144-55.64,144-144C400,202.21,256,43.91,256,43.91Zm16,362.3v-24a60.07,60.07,0,0,0,60-60h24A84.09,84.09,0,0,1,272,406.21Z" />
      </svg>
    </>
  )
}
