import React, { SVGProps } from 'react'

type LogoWindowsProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function LogoWindows({ extraStyles, ...rest }: LogoWindowsProps) {
  const defaultProps: LogoWindowsProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: LogoWindowsProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <path d="M480,265H232V444l248,36V265Z" />
        <path d="M216,265H32V415l184,26.7V265Z" />
        <path d="M480,32,232,67.4V249H480V32Z" />
        <path d="M216,69.7,32,96V249H216V69.7Z" />
      </svg>
    </>
  )
}
