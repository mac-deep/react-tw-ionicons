import React, { SVGProps } from 'react'

type FilterProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function Filter({ extraStyles, ...rest }: FilterProps) {
  const defaultProps: FilterProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: FilterProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <path d="M472,168H40a24,24,0,0,1,0-48H472a24,24,0,0,1,0,48Z" />
        <path d="M392,280H120a24,24,0,0,1,0-48H392a24,24,0,0,1,0,48Z" />
        <path d="M296,392H216a24,24,0,0,1,0-48h80a24,24,0,0,1,0,48Z" />
      </svg>
    </>
  )
}
