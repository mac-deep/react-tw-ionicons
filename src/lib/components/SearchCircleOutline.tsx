import React, { SVGProps } from 'react'

type SearchCircleOutlineProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function SearchCircleOutline({ extraStyles, ...rest }: SearchCircleOutlineProps) {
  const defaultProps: SearchCircleOutlineProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: SearchCircleOutlineProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <path
          d="M256,80A176,176,0,1,0,432,256,176,176,0,0,0,256,80Z"
          style={{ fill: 'none', stroke: 'currentColor', strokeMiterlimit: '10', strokeWidth: '32px' }}
        />
        <path
          d="M232,160a72,72,0,1,0,72,72A72,72,0,0,0,232,160Z"
          style={{ fill: 'none', stroke: 'currentColor', strokeMiterlimit: '10', strokeWidth: '32px' }}
        />
        <line
          x1="283.64"
          y1="283.64"
          x2="336"
          y2="336"
          style={{
            fill: 'none',
            stroke: 'currentColor',
            strokeLinecap: 'round',
            strokeMiterlimit: '10',
            strokeWidth: '32px',
          }}
        />
      </svg>
    </>
  )
}
