import React, { SVGProps } from 'react'

type PowerProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function Power({ extraStyles, ...rest }: PowerProps) {
  const defaultProps: PowerProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: PowerProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <path d="M256,464C141.31,464,48,370.53,48,255.65c0-62.45,27.25-121,74.76-160.55a22,22,0,1,1,28.17,33.8C113.48,160.1,92,206.3,92,255.65,92,346.27,165.57,420,256,420s164-73.73,164-164.35A164,164,0,0,0,360.17,129a22,22,0,1,1,28-33.92A207.88,207.88,0,0,1,464,255.65C464,370.53,370.69,464,256,464Z" />
        <path d="M256,272a22,22,0,0,1-22-22V70a22,22,0,0,1,44,0V250A22,22,0,0,1,256,272Z" />
      </svg>
    </>
  )
}
