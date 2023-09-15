import React, { SVGProps } from 'react'

type InfiniteOutlineProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function InfiniteOutline({ extraStyles, ...rest }: InfiniteOutlineProps) {
  const defaultProps: InfiniteOutlineProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: InfiniteOutlineProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <path
          d="M256,256s-48-96-126-96c-54.12,0-98,43-98,96s43.88,96,98,96c37.51,0,71-22.41,94-48"
          style={{
            fill: 'none',
            stroke: 'currentColor',
            strokeLinecap: 'round',
            strokeMiterlimit: '10',
            strokeWidth: '32px',
          }}
        />
        <path
          d="M256,256s48,96,126,96c54.12,0,98-43,98-96s-43.88-96-98-96c-37.51,0-71,22.41-94,48"
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
