import React, { SVGProps } from 'react'

type SkullSharpProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function SkullSharp({ extraStyles, ...rest }: SkullSharpProps) {
  const defaultProps: SkullSharpProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: SkullSharpProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <path d="M256,16C141.31,16,48,109.31,48,224V378.83l82,32.81L146.88,496H192V432h32v64h16V432h32v64h16V432h32v64h45.12L382,411.64l82-32.81V224C464,109.31,370.69,16,256,16ZM168,336a56,56,0,1,1,56-56A56.06,56.06,0,0,1,168,336Zm51.51,64L244,320h24l24.49,80ZM344,336a56,56,0,1,1,56-56A56.06,56.06,0,0,1,344,336Zm104,32h0Z" />
      </svg>
    </>
  )
}
