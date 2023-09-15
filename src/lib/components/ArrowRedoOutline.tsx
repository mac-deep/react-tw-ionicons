import React, { SVGProps } from 'react'

type ArrowRedoOutlineProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function ArrowRedoOutline({ extraStyles, ...rest }: ArrowRedoOutlineProps) {
  const defaultProps: ArrowRedoOutlineProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: ArrowRedoOutlineProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <path
          d="M448,256,272,88v96C103.57,184,64,304.77,64,424c48.61-62.24,91.6-96,208-96v96Z"
          style={{ fill: 'none', stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: '32px' }}
        />
      </svg>
    </>
  )
}
