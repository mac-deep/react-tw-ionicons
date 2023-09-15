import React, { SVGProps } from 'react'

type LaptopProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function Laptop({ extraStyles, ...rest }: LaptopProps) {
  const defaultProps: LaptopProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: LaptopProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <path d="M496,400H467.66A47.92,47.92,0,0,0,480,367.86V128.14A48.2,48.2,0,0,0,431.86,80H80.14A48.2,48.2,0,0,0,32,128.14V367.86A47.92,47.92,0,0,0,44.34,400H16a16,16,0,0,0,0,32H496a16,16,0,0,0,0-32Z" />
      </svg>
    </>
  )
}
