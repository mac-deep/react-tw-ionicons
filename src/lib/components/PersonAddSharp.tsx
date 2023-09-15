import React, { SVGProps } from 'react'

type PersonAddSharpProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function PersonAddSharp({ extraStyles, ...rest }: PersonAddSharpProps) {
  const defaultProps: PersonAddSharpProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: PersonAddSharpProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <polygon points="106 304 106 250 160 250 160 214 106 214 106 160 70 160 70 214 16 214 16 250 70 250 70 304 106 304" />
        <circle cx="288" cy="144" r="112" />
        <path d="M288,288c-69.42,0-208,42.88-208,128v64H496V416C496,330.88,357.42,288,288,288Z" />
      </svg>
    </>
  )
}
