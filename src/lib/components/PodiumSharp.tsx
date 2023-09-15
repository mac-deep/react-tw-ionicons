import React, { SVGProps } from 'react'

type PodiumSharpProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function PodiumSharp({ extraStyles, ...rest }: PodiumSharpProps) {
  const defaultProps: PodiumSharpProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: PodiumSharpProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <rect x="160" y="32" width="192" height="448" />
        <rect x="384" y="192" width="112" height="288" />
        <rect x="16" y="128" width="112" height="352" />
      </svg>
    </>
  )
}
