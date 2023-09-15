import React, { SVGProps } from 'react'

type EllipsisHorizontalCircleOutlineProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function EllipsisHorizontalCircleOutline({
  extraStyles,
  ...rest
}: EllipsisHorizontalCircleOutlineProps) {
  const defaultProps: EllipsisHorizontalCircleOutlineProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: EllipsisHorizontalCircleOutlineProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <circle cx="256" cy="256" r="26" />
        <circle cx="346" cy="256" r="26" />
        <circle cx="166" cy="256" r="26" />
        <path
          d="M448,256c0-106-86-192-192-192S64,150,64,256s86,192,192,192S448,362,448,256Z"
          style={{ fill: 'none', stroke: 'currentColor', strokeMiterlimit: '10', strokeWidth: '32px' }}
        />
      </svg>
    </>
  )
}
