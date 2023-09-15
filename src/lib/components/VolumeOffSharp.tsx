import React, { SVGProps } from 'react'

type VolumeOffSharpProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function VolumeOffSharp({ extraStyles, ...rest }: VolumeOffSharpProps) {
  const defaultProps: VolumeOffSharpProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: VolumeOffSharpProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <polygon points="237.65 176.1 144 176.1 144 335.9 237.65 335.9 368 440 368 72 237.65 176.1" />
      </svg>
    </>
  )
}
