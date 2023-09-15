import React, { SVGProps } from 'react'

type CaretDownProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function CaretDown({ extraStyles, ...rest }: CaretDownProps) {
  const defaultProps: CaretDownProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: CaretDownProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <path d="M98,190.06,237.78,353.18a24,24,0,0,0,36.44,0L414,190.06c13.34-15.57,2.28-39.62-18.22-39.62H116.18C95.68,150.44,84.62,174.49,98,190.06Z" />
      </svg>
    </>
  )
}
