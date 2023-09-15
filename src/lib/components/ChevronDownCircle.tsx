import React, { SVGProps } from 'react'

type ChevronDownCircleProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function ChevronDownCircle({ extraStyles, ...rest }: ChevronDownCircleProps) {
  const defaultProps: ChevronDownCircleProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: ChevronDownCircleProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <path d="M464,256c0-114.87-93.13-208-208-208S48,141.13,48,256s93.13,208,208,208S464,370.87,464,256ZM363.31,227.31l-96,96a16,16,0,0,1-22.62,0l-96-96a16,16,0,0,1,22.62-22.62L256,289.37l84.69-84.68a16,16,0,0,1,22.62,22.62Z" />
      </svg>
    </>
  )
}
