import React, { SVGProps } from 'react'

type CaretForwardCircleOutlineProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function CaretForwardCircleOutline({ extraStyles, ...rest }: CaretForwardCircleOutlineProps) {
  const defaultProps: CaretForwardCircleOutlineProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: CaretForwardCircleOutlineProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <path d="M238.23,342.43l89.09-74.13a16,16,0,0,0,0-24.6l-89.09-74.13A16,16,0,0,0,212,181.86V330.14A16,16,0,0,0,238.23,342.43Z" />
        <path
          d="M448,256c0-106-86-192-192-192S64,150,64,256s86,192,192,192S448,362,448,256Z"
          style={{ fill: 'none', stroke: 'currentColor', strokeMiterlimit: '10', strokeWidth: '32px' }}
        />
      </svg>
    </>
  )
}
