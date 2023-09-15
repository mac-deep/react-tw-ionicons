import React, { SVGProps } from 'react'

type PhoneLandscapeSharpProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function PhoneLandscapeSharp({ extraStyles, ...rest }: PhoneLandscapeSharpProps) {
  const defaultProps: PhoneLandscapeSharpProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: PhoneLandscapeSharpProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <path d="M0,130V382a18,18,0,0,0,18,18H494a18,18,0,0,0,18-18V130a18,18,0,0,0-18-18H18A18,18,0,0,0,0,130ZM448,364H64V148H448Z" />
      </svg>
    </>
  )
}
