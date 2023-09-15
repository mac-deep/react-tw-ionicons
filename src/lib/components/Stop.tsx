import React, { SVGProps } from 'react'

type StopProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function Stop({ extraStyles, ...rest }: StopProps) {
  const defaultProps: StopProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: StopProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <path d="M392,432H120a40,40,0,0,1-40-40V120a40,40,0,0,1,40-40H392a40,40,0,0,1,40,40V392A40,40,0,0,1,392,432Z" />
      </svg>
    </>
  )
}
