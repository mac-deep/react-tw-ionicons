import React, { SVGProps } from 'react'

type ManSharpProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function ManSharp({ extraStyles, ...rest }: ManSharpProps) {
  const defaultProps: ManSharpProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: ManSharpProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <circle cx="256" cy="56" r="56" />
        <path d="M336,128H176a32,32,0,0,0-32,32V320h48V192h8V512h52V328h8V512h52V192h8V320h48V160A32,32,0,0,0,336,128Z" />
      </svg>
    </>
  )
}
