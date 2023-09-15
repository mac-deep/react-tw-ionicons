import React, { SVGProps } from 'react'

type PauseProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function Pause({ extraStyles, ...rest }: PauseProps) {
  const defaultProps: PauseProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: PauseProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <path d="M208,432H160a16,16,0,0,1-16-16V96a16,16,0,0,1,16-16h48a16,16,0,0,1,16,16V416A16,16,0,0,1,208,432Z" />
        <path d="M352,432H304a16,16,0,0,1-16-16V96a16,16,0,0,1,16-16h48a16,16,0,0,1,16,16V416A16,16,0,0,1,352,432Z" />
      </svg>
    </>
  )
}
