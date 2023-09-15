import React, { SVGProps } from 'react'

type DiscProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function Disc({ extraStyles, ...rest }: DiscProps) {
  const defaultProps: DiscProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: DiscProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <path d="M256,176a80,80,0,1,0,80,80A80.09,80.09,0,0,0,256,176Zm0,112a32,32,0,1,1,32-32A32,32,0,0,1,256,288Z" />
        <path d="M414.39,97.61A224,224,0,1,0,97.61,414.39,224,224,0,1,0,414.39,97.61ZM256,368A112,112,0,1,1,368,256,112.12,112.12,0,0,1,256,368Z" />
      </svg>
    </>
  )
}
