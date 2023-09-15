import React, { SVGProps } from 'react'

type WarningSharpProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function WarningSharp({ extraStyles, ...rest }: WarningSharpProps) {
  const defaultProps: WarningSharpProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: WarningSharpProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <path d="M479,447.77,268.43,56.64a8,8,0,0,0-14.09,0L43.73,447.77a8,8,0,0,0,7.05,11.79H472A8,8,0,0,0,479,447.77ZM281.38,411.48h-40v-40h40Zm-4-63.92h-32l-6-160h44Z" />
      </svg>
    </>
  )
}
