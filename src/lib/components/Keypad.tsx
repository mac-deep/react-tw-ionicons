import React, { SVGProps } from 'react'

type KeypadProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function Keypad({ extraStyles, ...rest }: KeypadProps) {
  const defaultProps: KeypadProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: KeypadProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <path d="M256,400a48,48,0,1,0,48,48,48,48,0,0,0-48-48Z" />
        <path d="M256,272a48,48,0,1,0,48,48,48,48,0,0,0-48-48Z" />
        <path d="M256,144a48,48,0,1,0,48,48,48,48,0,0,0-48-48Z" />
        <path d="M256,16a48,48,0,1,0,48,48,48,48,0,0,0-48-48Z" />
        <path d="M384,272a48,48,0,1,0,48,48,48,48,0,0,0-48-48Z" />
        <path d="M384,144a48,48,0,1,0,48,48,48,48,0,0,0-48-48Z" />
        <path d="M384,16a48,48,0,1,0,48,48,48,48,0,0,0-48-48Z" />
        <path d="M128,272a48,48,0,1,0,48,48,48,48,0,0,0-48-48Z" />
        <path d="M128,144a48,48,0,1,0,48,48,48,48,0,0,0-48-48Z" />
        <path d="M128,16a48,48,0,1,0,48,48,48,48,0,0,0-48-48Z" />
      </svg>
    </>
  )
}
