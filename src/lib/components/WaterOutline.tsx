import React, { SVGProps } from 'react'

type WaterOutlineProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function WaterOutline({ extraStyles, ...rest }: WaterOutlineProps) {
  const defaultProps: WaterOutlineProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: WaterOutlineProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <path
          d="M400,320c0,88.37-55.63,144-144,144S112,408.37,112,320c0-94.83,103.23-222.85,134.89-259.88a12,12,0,0,1,18.23,0C296.77,97.15,400,225.17,400,320Z"
          style={{ fill: 'none', stroke: 'currentColor', strokeMiterlimit: '10', strokeWidth: '32px' }}
        />
        <path
          d="M344,328a72,72,0,0,1-72,72"
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
