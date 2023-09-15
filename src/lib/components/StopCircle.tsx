import React, { SVGProps } from 'react'

type StopCircleProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function StopCircle({ extraStyles, ...rest }: StopCircleProps) {
  const defaultProps: StopCircleProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: StopCircleProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <path d="M256,48C141.31,48,48,141.31,48,256s93.31,208,208,208,208-93.31,208-208S370.69,48,256,48Zm80,262.4A25.62,25.62,0,0,1,310.4,336H201.6A25.62,25.62,0,0,1,176,310.4V201.6A25.62,25.62,0,0,1,201.6,176H310.4A25.62,25.62,0,0,1,336,201.6Z" />
      </svg>
    </>
  )
}
