import React, { SVGProps } from 'react'

type BowlingBallSharpProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function BowlingBallSharp({ extraStyles, ...rest }: BowlingBallSharpProps) {
  const defaultProps: BowlingBallSharpProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: BowlingBallSharpProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg id="icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <path d="M414.39,97.61A224,224,0,1,0,97.61,414.39,224,224,0,1,0,414.39,97.61ZM286,230a28,28,0,1,1,28-28A28,28,0,0,1,286,230Zm8-76a28,28,0,1,1,28-28A28,28,0,0,1,294,154Zm68,44a28,28,0,1,1,28-28A28,28,0,0,1,362,198Z" />
      </svg>
    </>
  )
}
