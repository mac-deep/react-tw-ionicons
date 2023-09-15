import React, { SVGProps } from 'react'

type BowlingBallProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function BowlingBall({ extraStyles, ...rest }: BowlingBallProps) {
  const defaultProps: BowlingBallProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: BowlingBallProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg id="icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <path d="M414.39,97.61A224,224,0,1,0,97.61,414.39,224,224,0,1,0,414.39,97.61ZM288,224a24,24,0,1,1,24-24A24,24,0,0,1,288,224Zm8-72a24,24,0,1,1,24-24A24,24,0,0,1,296,152Zm64,40a24,24,0,1,1,24-24A24,24,0,0,1,360,192Z" />
      </svg>
    </>
  )
}
