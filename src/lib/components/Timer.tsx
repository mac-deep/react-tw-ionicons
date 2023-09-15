import React, { SVGProps } from 'react'

type TimerProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function Timer({ extraStyles, ...rest }: TimerProps) {
  const defaultProps: TimerProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: TimerProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <path d="M256,48C141.12,48,48,141.12,48,256s93.12,208,208,208,208-93.12,208-208S370.88,48,256,48ZM173.67,162.34l105,71a32.5,32.5,0,0,1-37.25,53.26,33.21,33.21,0,0,1-8-8l-71-105a8.13,8.13,0,0,1,11.32-11.32ZM256,432C159,432,80,353.05,80,256a174.55,174.55,0,0,1,53.87-126.72,14.15,14.15,0,1,1,19.64,20.37A146.53,146.53,0,0,0,108.3,256c0,81.44,66.26,147.7,147.7,147.7S403.7,337.44,403.7,256c0-76.67-58.72-139.88-133.55-147V164a14.15,14.15,0,1,1-28.3,0V94.15A14.15,14.15,0,0,1,256,80C353.05,80,432,159,432,256S353.05,432,256,432Z" />
      </svg>
    </>
  )
}
