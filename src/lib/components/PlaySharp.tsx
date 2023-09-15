import React, { SVGProps } from 'react'

type PlaySharpProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function PlaySharp({ extraStyles, ...rest }: PlaySharpProps) {
  const defaultProps: PlaySharpProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: PlaySharpProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <polygon points="96 448 416 256 96 64 96 448" />
      </svg>
    </>
  )
}
