import React, { SVGProps } from 'react'

type ContrastProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function Contrast({ extraStyles, ...rest }: ContrastProps) {
  const defaultProps: ContrastProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: ContrastProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <path d="M256,32A224,224,0,0,0,97.61,414.39,224,224,0,1,0,414.39,97.61,222.53,222.53,0,0,0,256,32ZM64,256C64,150.13,150.13,64,256,64V448C150.13,448,64,361.87,64,256Z" />
      </svg>
    </>
  )
}
