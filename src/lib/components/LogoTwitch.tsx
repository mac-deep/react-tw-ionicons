import React, { SVGProps } from 'react'

type LogoTwitchProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function LogoTwitch({ extraStyles, ...rest }: LogoTwitchProps) {
  const defaultProps: LogoTwitchProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: LogoTwitchProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <path d="M80,32,48,112V416h96v64h64l64-64h80L464,304V32ZM416,288l-64,64H256l-64,64V352H112V80H416Z" />
        <rect x="320" y="143" width="48" height="129" />
        <rect x="208" y="143" width="48" height="129" />
      </svg>
    </>
  )
}
