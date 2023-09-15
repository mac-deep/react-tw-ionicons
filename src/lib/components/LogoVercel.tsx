import React, { SVGProps } from 'react'

type LogoVercelProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function LogoVercel({ extraStyles, ...rest }: LogoVercelProps) {
  const defaultProps: LogoVercelProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: LogoVercelProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <path fillRule="evenodd" d="M256,48,496,464H16Z" />
      </svg>
    </>
  )
}
