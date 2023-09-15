import React, { SVGProps } from 'react'

type LogoMicrosoftProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function LogoMicrosoft({ extraStyles, ...rest }: LogoMicrosoftProps) {
  const defaultProps: LogoMicrosoftProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: LogoMicrosoftProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg id="icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <path d="M31.87,30.58H244.7V243.39H31.87Z" />
        <path d="M266.89,30.58H479.7V243.39H266.89Z" />
        <path d="M31.87,265.61H244.7v212.8H31.87Z" />
        <path d="M266.89,265.61H479.7v212.8H266.89Z" />
      </svg>
    </>
  )
}
