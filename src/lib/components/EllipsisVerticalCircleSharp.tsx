import React, { SVGProps } from 'react'

type EllipsisVerticalCircleSharpProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function EllipsisVerticalCircleSharp({ extraStyles, ...rest }: EllipsisVerticalCircleSharpProps) {
  const defaultProps: EllipsisVerticalCircleSharpProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: EllipsisVerticalCircleSharpProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <path d="M464,256c0-114.87-93.13-208-208-208S48,141.13,48,256s93.13,208,208,208S464,370.87,464,256ZM230,166a26,26,0,1,1,26,26A26,26,0,0,1,230,166Zm0,90a26,26,0,1,1,26,26A26,26,0,0,1,230,256Zm0,90a26,26,0,1,1,26,26A26,26,0,0,1,230,346Z" />
      </svg>
    </>
  )
}
