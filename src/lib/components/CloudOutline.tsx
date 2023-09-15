import React, { SVGProps } from 'react'

type CloudOutlineProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function CloudOutline({ extraStyles, ...rest }: CloudOutlineProps) {
  const defaultProps: CloudOutlineProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: CloudOutlineProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <path
          d="M400,240c-8.89-89.54-71-144-144-144-69,0-113.44,48.2-128,96C68,198,16,235.59,16,304c0,66,54,112,120,112H396c55,0,100-27.44,100-88C496,268.18,443,242.24,400,240Z"
          style={{ fill: 'none', stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: '32px' }}
        />
      </svg>
    </>
  )
}
