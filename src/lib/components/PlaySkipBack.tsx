import React, { SVGProps } from 'react'

type PlaySkipBackProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function PlaySkipBack({ extraStyles, ...rest }: PlaySkipBackProps) {
  const defaultProps: PlaySkipBackProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: PlaySkipBackProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <path d="M112,64a16,16,0,0,1,16,16V216.43L360.77,77.11a35.13,35.13,0,0,1,35.77-.44c12,6.8,19.46,20,19.46,34.33V401c0,14.37-7.46,27.53-19.46,34.33a35.14,35.14,0,0,1-35.77-.45L128,295.57V432a16,16,0,0,1-32,0V80A16,16,0,0,1,112,64Z" />
      </svg>
    </>
  )
}
