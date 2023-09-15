import React, { SVGProps } from 'react'

type CaretForwardOutlineProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function CaretForwardOutline({ extraStyles, ...rest }: CaretForwardOutlineProps) {
  const defaultProps: CaretForwardOutlineProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: CaretForwardOutlineProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <path d="M190.06,414,353.18,274.22a24,24,0,0,0,0-36.44L190.06,98c-15.57-13.34-39.62-2.28-39.62,18.22V395.82C150.44,416.32,174.49,427.38,190.06,414Z" />
      </svg>
    </>
  )
}
