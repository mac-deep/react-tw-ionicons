import React, { SVGProps } from 'react'

type VideocamSharpProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function VideocamSharp({ extraStyles, ...rest }: VideocamSharpProps) {
  const defaultProps: VideocamSharpProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: VideocamSharpProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <path d="M336,208V128a16,16,0,0,0-16-16H32a16,16,0,0,0-16,16V384a16,16,0,0,0,16,16H320a16,16,0,0,0,16-16V304l160,96V112Z" />
      </svg>
    </>
  )
}
