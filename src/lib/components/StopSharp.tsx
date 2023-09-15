import React, { SVGProps } from 'react'

type StopSharpProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function StopSharp({ extraStyles, ...rest }: StopSharpProps) {
  const defaultProps: StopSharpProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: StopSharpProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <rect x="80" y="80" width="352" height="352" />
      </svg>
    </>
  )
}
