import React, { SVGProps } from 'react'

type ChevronBackCircleProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function ChevronBackCircle({ extraStyles, ...rest }: ChevronBackCircleProps) {
  const defaultProps: ChevronBackCircleProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: ChevronBackCircleProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <path d="M256,48C141.13,48,48,141.13,48,256s93.13,208,208,208,208-93.13,208-208S370.87,48,256,48Zm35.31,292.69a16,16,0,1,1-22.62,22.62l-96-96a16,16,0,0,1,0-22.62l96-96a16,16,0,0,1,22.62,22.62L206.63,256Z" />
      </svg>
    </>
  )
}
