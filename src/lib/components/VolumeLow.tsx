import React, { SVGProps } from 'react'

type VolumeLowProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function VolumeLow({ extraStyles, ...rest }: VolumeLowProps) {
  const defaultProps: VolumeLowProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: VolumeLowProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <path d="M296,416.19a23.92,23.92,0,0,1-14.21-4.69l-.66-.51-91.46-75H120a24,24,0,0,1-24-24V200a24,24,0,0,1,24-24h69.65l91.46-75,.66-.51A24,24,0,0,1,320,119.83V392.17a24,24,0,0,1-24,24Z" />
        <path d="M384,336a16,16,0,0,1-14.29-23.18c9.49-18.9,14.3-38,14.3-56.82,0-19.36-4.66-37.92-14.25-56.73a16,16,0,0,1,28.5-14.54C410.2,208.16,416,231.47,416,256c0,23.83-6,47.78-17.7,71.18A16,16,0,0,1,384,336Z" />
      </svg>
    </>
  )
}
