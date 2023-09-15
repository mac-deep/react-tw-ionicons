import React, { SVGProps } from 'react'

type PauseSharpProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function PauseSharp({ extraStyles, ...rest }: PauseSharpProps) {
  const defaultProps: PauseSharpProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: PauseSharpProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <path d="M224,432H144V80h80Z" />
        <path d="M368,432H288V80h80Z" />
      </svg>
    </>
  )
}
