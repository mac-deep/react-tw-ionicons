import React, { SVGProps } from 'react'

type ChevronUpCircleSharpProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function ChevronUpCircleSharp({ extraStyles, ...rest }: ChevronUpCircleSharpProps) {
  const defaultProps: ChevronUpCircleSharpProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: ChevronUpCircleSharpProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <path d="M256,48C141.13,48,48,141.13,48,256s93.13,208,208,208,208-93.13,208-208S370.87,48,256,48Zm96,270.63-96-96-96,96L137.37,296,256,177.37,374.63,296Z" />
      </svg>
    </>
  )
}
