import React, { SVGProps } from 'react'

type StatsChartSharpProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function StatsChartSharp({ extraStyles, ...rest }: StatsChartSharpProps) {
  const defaultProps: StatsChartSharpProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: StatsChartSharpProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <path d="M128,496H48V304h80Z" />
        <path d="M352,496H272V208h80Z" />
        <path d="M464,496H384V96h80Z" />
        <path d="M240,496H160V16h80Z" />
      </svg>
    </>
  )
}
