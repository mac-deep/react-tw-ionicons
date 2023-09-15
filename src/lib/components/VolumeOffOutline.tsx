import React, { SVGProps } from 'react'

type VolumeOffOutlineProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function VolumeOffOutline({ extraStyles, ...rest }: VolumeOffOutlineProps) {
  const defaultProps: VolumeOffOutlineProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: VolumeOffOutlineProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <path
          d="M237.65,192H168a8,8,0,0,0-8,8V312a8,8,0,0,0,8,8h69.65a16,16,0,0,1,10.14,3.63l91.47,75A8,8,0,0,0,352,392.17V119.83a8,8,0,0,0-12.74-6.44l-91.47,75A16,16,0,0,1,237.65,192Z"
          style={{
            fill: 'none',
            stroke: 'currentColor',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '32px',
          }}
        />
      </svg>
    </>
  )
}
