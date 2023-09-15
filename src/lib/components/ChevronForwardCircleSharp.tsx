import React, { SVGProps } from 'react'

type ChevronForwardCircleSharpProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function ChevronForwardCircleSharp({ extraStyles, ...rest }: ChevronForwardCircleSharpProps) {
  const defaultProps: ChevronForwardCircleSharpProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: ChevronForwardCircleSharpProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <path d="M256,48C141.13,48,48,141.13,48,256s93.13,208,208,208,208-93.13,208-208S370.87,48,256,48ZM216,374.63,193.37,352l96-96-96-96L216,137.37,334.63,256Z" />
      </svg>
    </>
  )
}
