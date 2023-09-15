import React, { SVGProps } from 'react'

type NavigateSharpProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function NavigateSharp({ extraStyles, ...rest }: NavigateSharpProps) {
  const defaultProps: NavigateSharpProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: NavigateSharpProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <polygon points="480 32 32 240 272 240 272 480 480 32" />
      </svg>
    </>
  )
}
