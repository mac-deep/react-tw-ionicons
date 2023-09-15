import React, { SVGProps } from 'react'

type ArrowUndoOutlineProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function ArrowUndoOutline({ extraStyles, ...rest }: ArrowUndoOutlineProps) {
  const defaultProps: ArrowUndoOutlineProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: ArrowUndoOutlineProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <path
          d="M240,424V328c116.4,0,159.39,33.76,208,96,0-119.23-39.57-240-208-240V88L64,256Z"
          style={{ fill: 'none', stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: '32px' }}
        />
      </svg>
    </>
  )
}
