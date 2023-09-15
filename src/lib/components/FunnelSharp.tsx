import React, { SVGProps } from 'react'

type FunnelSharpProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function FunnelSharp({ extraStyles, ...rest }: FunnelSharpProps) {
  const defaultProps: FunnelSharpProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: FunnelSharpProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <polygon points="0 48 192 288 192 416 320 464 320 288 512 48 0 48" />
      </svg>
    </>
  )
}
