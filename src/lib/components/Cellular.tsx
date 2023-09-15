import React, { SVGProps } from 'react'

type CellularProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function Cellular({ extraStyles, ...rest }: CellularProps) {
  const defaultProps: CellularProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: CellularProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <path d="M472,432H424a24,24,0,0,1-24-24V104a24,24,0,0,1,24-24h48a24,24,0,0,1,24,24V408A24,24,0,0,1,472,432Z" />
        <path d="M344,432H296a24,24,0,0,1-24-24V184a24,24,0,0,1,24-24h48a24,24,0,0,1,24,24V408A24,24,0,0,1,344,432Z" />
        <path d="M216,432H168a24,24,0,0,1-24-24V248a24,24,0,0,1,24-24h48a24,24,0,0,1,24,24V408A24,24,0,0,1,216,432Z" />
        <path d="M88,432H40a24,24,0,0,1-24-24V312a24,24,0,0,1,24-24H88a24,24,0,0,1,24,24v96A24,24,0,0,1,88,432Z" />
      </svg>
    </>
  )
}
