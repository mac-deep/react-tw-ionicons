import React, { SVGProps } from 'react'

type BluetoothOutlineProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function BluetoothOutline({ extraStyles, ...rest }: BluetoothOutlineProps) {
  const defaultProps: BluetoothOutlineProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: BluetoothOutlineProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <polyline
          points="144 352 368 160 256 48 256 464 368 352 144 160"
          style={{
            fill: 'none',
            stroke: 'currentColor',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '32px',
          }}
        />
      </svg>
    </>
  )
}
