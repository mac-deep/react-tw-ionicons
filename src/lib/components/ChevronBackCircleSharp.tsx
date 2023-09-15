import React, { SVGProps } from 'react'

type ChevronBackCircleSharpProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function ChevronBackCircleSharp({ extraStyles, ...rest }: ChevronBackCircleSharpProps) {
  const defaultProps: ChevronBackCircleSharpProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: ChevronBackCircleSharpProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <path d="M256,48C141.13,48,48,141.13,48,256s93.13,208,208,208,208-93.13,208-208S370.87,48,256,48Zm62.63,304L296,374.63,177.37,256,296,137.37,318.63,160l-96,96Z" />
      </svg>
    </>
  )
}
