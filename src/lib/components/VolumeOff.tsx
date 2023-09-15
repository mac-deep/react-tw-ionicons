import React, { SVGProps } from 'react'

type VolumeOffProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function VolumeOff({ extraStyles, ...rest }: VolumeOffProps) {
  const defaultProps: VolumeOffProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: VolumeOffProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <path d="M344,416a23.92,23.92,0,0,1-14.21-4.69c-.23-.16-.44-.33-.66-.51l-91.46-74.9H168a24,24,0,0,1-24-24V200.07a24,24,0,0,1,24-24h69.65l91.46-74.9c.22-.18.43-.35.66-.51A24,24,0,0,1,368,120V392a24,24,0,0,1-24,24Z" />
      </svg>
    </>
  )
}
