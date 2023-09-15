import React, { SVGProps } from 'react'

type HourglassSharpProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function HourglassSharp({ extraStyles, ...rest }: HourglassSharpProps) {
  const defaultProps: HourglassSharpProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: HourglassSharpProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <path d="M416,32H96V144L204,256,96,368V480H416V368L308,256,416,144ZM272,224V336l91,96H148l92-96V224l-80-80H352Z" />
      </svg>
    </>
  )
}
