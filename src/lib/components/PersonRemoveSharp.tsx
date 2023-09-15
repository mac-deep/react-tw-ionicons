import React, { SVGProps } from 'react'

type PersonRemoveSharpProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function PersonRemoveSharp({ extraStyles, ...rest }: PersonRemoveSharpProps) {
  const defaultProps: PersonRemoveSharpProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: PersonRemoveSharpProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <rect x="16" y="214" width="144" height="36" />
        <circle cx="288" cy="144" r="112" />
        <path d="M288,288c-69.42,0-208,42.88-208,128v64H496V416C496,330.88,357.42,288,288,288Z" />
      </svg>
    </>
  )
}
