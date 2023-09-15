import React, { SVGProps } from 'react'

type LogoStencilProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function LogoStencil({ extraStyles, ...rest }: LogoStencilProps) {
  const defaultProps: LogoStencilProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: LogoStencilProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <path d="M188.8,334.07H386.13L279.47,448H83.2Z" />
        <path d="M512,199H106.61L0,313H405.39Z" />
        <path d="M232.2,64H428.8L322.62,177.93H125.87Z" />
      </svg>
    </>
  )
}
