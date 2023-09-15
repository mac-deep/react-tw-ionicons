import React, { SVGProps } from 'react'

type FilterSharpProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function FilterSharp({ extraStyles, ...rest }: FilterSharpProps) {
  const defaultProps: FilterSharpProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: FilterSharpProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <rect x="16" y="120" width="480" height="48" />
        <rect x="96" y="232" width="320" height="48" />
        <rect x="192" y="344" width="128" height="48" />
      </svg>
    </>
  )
}
