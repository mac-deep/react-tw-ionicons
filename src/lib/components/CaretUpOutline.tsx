import React, { SVGProps } from 'react'

type CaretUpOutlineProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function CaretUpOutline({ extraStyles, ...rest }: CaretUpOutlineProps) {
  const defaultProps: CaretUpOutlineProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: CaretUpOutlineProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <path d="M414,321.94,274.22,158.82a24,24,0,0,0-36.44,0L98,321.94c-13.34,15.57-2.28,39.62,18.22,39.62H395.82C416.32,361.56,427.38,337.51,414,321.94Z" />
      </svg>
    </>
  )
}
