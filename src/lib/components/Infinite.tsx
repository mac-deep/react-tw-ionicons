import React, { SVGProps } from 'react'

type InfiniteProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function Infinite({ extraStyles, ...rest }: InfiniteProps) {
  const defaultProps: InfiniteProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: InfiniteProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <path
          d="M256,256s-48-96-126-96c-54.12,0-98,43-98,96s43.88,96,98,96c30,0,56.45-13.18,78-32"
          style={{
            fill: 'none',
            stroke: 'currentColor',
            strokeLinecap: 'round',
            strokeMiterlimit: '10',
            strokeWidth: '48px',
          }}
        />
        <path
          d="M256,256s48,96,126,96c54.12,0,98-43,98-96s-43.88-96-98-96c-29.37,0-56.66,13.75-78,32"
          style={{
            fill: 'none',
            stroke: 'currentColor',
            strokeLinecap: 'round',
            strokeMiterlimit: '10',
            strokeWidth: '48px',
          }}
        />
      </svg>
    </>
  )
}
