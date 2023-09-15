import React, { SVGProps } from 'react'

type PhonePortraitSharpProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function PhonePortraitSharp({ extraStyles, ...rest }: PhonePortraitSharpProps) {
  const defaultProps: PhonePortraitSharpProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: PhonePortraitSharpProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <path d="M382,0H130a18,18,0,0,0-18,18V494a18,18,0,0,0,18,18H382a18,18,0,0,0,18-18V18A18,18,0,0,0,382,0ZM148,448V64H364V448Z" />
      </svg>
    </>
  )
}
