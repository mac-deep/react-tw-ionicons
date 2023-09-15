import React, { SVGProps } from 'react'

type ServerOutlineProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function ServerOutline({ extraStyles, ...rest }: ServerOutlineProps) {
  const defaultProps: ServerOutlineProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: ServerOutlineProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <ellipse
          cx="256"
          cy="128"
          rx="192"
          ry="80"
          style={{
            fill: 'none',
            stroke: 'currentColor',
            strokeLinecap: 'round',
            strokeMiterlimit: '10',
            strokeWidth: '32px',
          }}
        />
        <path
          d="M448,214c0,44.18-86,80-192,80S64,258.18,64,214"
          style={{
            fill: 'none',
            stroke: 'currentColor',
            strokeLinecap: 'round',
            strokeMiterlimit: '10',
            strokeWidth: '32px',
          }}
        />
        <path
          d="M448,300c0,44.18-86,80-192,80S64,344.18,64,300"
          style={{
            fill: 'none',
            stroke: 'currentColor',
            strokeLinecap: 'round',
            strokeMiterlimit: '10',
            strokeWidth: '32px',
          }}
        />
        <path
          d="M64,127.24V384.76C64,428.52,150,464,256,464s192-35.48,192-79.24V127.24"
          style={{
            fill: 'none',
            stroke: 'currentColor',
            strokeLinecap: 'round',
            strokeMiterlimit: '10',
            strokeWidth: '32px',
          }}
        />
      </svg>
    </>
  )
}
