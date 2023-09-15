import React, { SVGProps } from 'react'

type BarChartProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function BarChart({ extraStyles, ...rest }: BarChartProps) {
  const defaultProps: BarChartProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: BarChartProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <path d="M480,496H48a32,32,0,0,1-32-32V32a16,16,0,0,1,32,0V464H480a16,16,0,0,1,0,32Z" />
        <path d="M156,432H116a36,36,0,0,1-36-36V244a36,36,0,0,1,36-36h40a36,36,0,0,1,36,36V396A36,36,0,0,1,156,432Z" />
        <path d="M300,432H260a36,36,0,0,1-36-36V196a36,36,0,0,1,36-36h40a36,36,0,0,1,36,36V396A36,36,0,0,1,300,432Z" />
        <path d="M443.64,432h-40a36,36,0,0,1-36-36V132a36,36,0,0,1,36-36h40a36,36,0,0,1,36,36V396A36,36,0,0,1,443.64,432Z" />
      </svg>
    </>
  )
}
