import React, { SVGProps } from 'react'

type TimeSharpProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function TimeSharp({ extraStyles, ...rest }: TimeSharpProps) {
  const defaultProps: TimeSharpProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: TimeSharpProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <path d="M256,48C141.13,48,48,141.13,48,256c0,114.69,93.32,208,208,208,114.86,0,208-93.14,208-208C464,141.31,370.69,48,256,48ZM364,288H244a4,4,0,0,1-4-4V116a4,4,0,0,1,4-4h24a4,4,0,0,1,4,4V256h92a4,4,0,0,1,4,4v24A4,4,0,0,1,364,288Z" />
      </svg>
    </>
  )
}
