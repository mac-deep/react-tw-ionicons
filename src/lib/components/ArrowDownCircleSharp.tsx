import React, { SVGProps } from 'react'

type ArrowDownCircleSharpProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function ArrowDownCircleSharp({ extraStyles, ...rest }: ArrowDownCircleSharpProps) {
  const defaultProps: ArrowDownCircleSharpProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: ArrowDownCircleSharpProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <path d="M256,464c114.87,0,208-93.13,208-208S370.87,48,256,48,48,141.13,48,256,141.13,464,256,464ZM175.91,240,240,303.58V154h32V303.58L336.09,240l22.54,22.71L256,364.54,153.37,262.7Z" />
      </svg>
    </>
  )
}
