import React, { SVGProps } from 'react'

type CaretUpCircleProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function CaretUpCircle({ extraStyles, ...rest }: CaretUpCircleProps) {
  const defaultProps: CaretUpCircleProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: CaretUpCircleProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <path d="M256,48C141.13,48,48,141.13,48,256s93.13,208,208,208,208-93.13,208-208S370.87,48,256,48Zm74.14,252H181.86a16,16,0,0,1-12.29-26.23l74.13-89.09a16,16,0,0,1,24.6,0l74.13,89.09A16,16,0,0,1,330.14,300Z" />
      </svg>
    </>
  )
}
