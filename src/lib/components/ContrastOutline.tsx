import React, { SVGProps } from 'react'

type ContrastOutlineProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function ContrastOutline({ extraStyles, ...rest }: ContrastOutlineProps) {
  const defaultProps: ContrastOutlineProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: ContrastOutlineProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <circle
          cx="256"
          cy="256"
          r="208"
          style={{ fill: 'none', stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: '32px' }}
        />
        <path d="M256,464C141.12,464,48,370.88,48,256S141.12,48,256,48Z" />
      </svg>
    </>
  )
}
