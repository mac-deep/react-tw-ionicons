import React, { SVGProps } from 'react'

type FolderOutlineProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function FolderOutline({ extraStyles, ...rest }: FolderOutlineProps) {
  const defaultProps: FolderOutlineProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: FolderOutlineProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <path
          d="M440,432H72a40,40,0,0,1-40-40V120A40,40,0,0,1,72,80h75.89a40,40,0,0,1,22.19,6.72l27.84,18.56A40,40,0,0,0,220.11,112H440a40,40,0,0,1,40,40V392A40,40,0,0,1,440,432Z"
          style={{
            fill: 'none',
            stroke: 'currentColor',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '32px',
          }}
        />
        <line
          x1="32"
          y1="192"
          x2="480"
          y2="192"
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
