import React, { SVGProps } from 'react'

type CompassOutlineProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function CompassOutline({ extraStyles, ...rest }: CompassOutlineProps) {
  const defaultProps: CompassOutlineProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: CompassOutlineProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <path
          d="M448,256c0-106-86-192-192-192S64,150,64,256s86,192,192,192S448,362,448,256Z"
          style={{ fill: 'none', stroke: 'currentColor', strokeMiterlimit: '10', strokeWidth: '32px' }}
        />
        <path d="M350.67,150.93l-117.2,46.88a64,64,0,0,0-35.66,35.66l-46.88,117.2a8,8,0,0,0,10.4,10.4l117.2-46.88a64,64,0,0,0,35.66-35.66l46.88-117.2A8,8,0,0,0,350.67,150.93ZM256,280a24,24,0,1,1,24-24A24,24,0,0,1,256,280Z" />
      </svg>
    </>
  )
}
