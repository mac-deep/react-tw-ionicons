import React, { SVGProps } from 'react'

type SyncCircleProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function SyncCircle({ extraStyles, ...rest }: SyncCircleProps) {
  const defaultProps: SyncCircleProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: SyncCircleProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <path d="M256,48C141.13,48,48,141.13,48,256s93.13,208,208,208,208-93.13,208-208S370.87,48,256,48Zm83.69,282.65a112.24,112.24,0,0,1-195-61.29,16,16,0,0,1-20.13-24.67l23.6-23.6a16,16,0,0,1,22.37-.25l24.67,23.6a16,16,0,0,1-18,26,80.25,80.25,0,0,0,138.72,38.83,16,16,0,0,1,23.77,21.41Zm47.76-63.34-23.6,23.6a16,16,0,0,1-22.37.25l-24.67-23.6a16,16,0,0,1,17.68-26.11A80.17,80.17,0,0,0,196,202.64a16,16,0,1,1-23.82-21.37,112.17,112.17,0,0,1,194.88,61.57,16,16,0,0,1,20.39,24.47Z" />
      </svg>
    </>
  )
}
