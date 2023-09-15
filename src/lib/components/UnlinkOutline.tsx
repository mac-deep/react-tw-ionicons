import React, { SVGProps } from 'react'

type UnlinkOutlineProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function UnlinkOutline({ extraStyles, ...rest }: UnlinkOutlineProps) {
  const defaultProps: UnlinkOutlineProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: UnlinkOutlineProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg id="icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <path
          d="M208,352H144a96,96,0,0,1,0-192h64"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="36"
        />
        <path
          d="M304,160h64a96,96,0,0,1,0,192H304"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="36"
        />
      </svg>
    </>
  )
}
