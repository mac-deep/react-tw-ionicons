import React, { SVGProps } from 'react'

type PersonSharpProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function PersonSharp({ extraStyles, ...rest }: PersonSharpProps) {
  const defaultProps: PersonSharpProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: PersonSharpProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <path d="M256,256A112,112,0,1,0,144,144,112,112,0,0,0,256,256Zm0,32c-69.42,0-208,42.88-208,128v64H464V416C464,330.88,325.42,288,256,288Z" />
      </svg>
    </>
  )
}
