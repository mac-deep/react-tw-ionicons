import React, { SVGProps } from 'react'

type PlaySkipBackCircleOutlineProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function PlaySkipBackCircleOutline({ extraStyles, ...rest }: PlaySkipBackCircleOutlineProps) {
  const defaultProps: PlaySkipBackCircleOutlineProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: PlaySkipBackCircleOutlineProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <path
          d="M256,448c106,0,192-86,192-192S362,64,256,64,64,150,64,256,150,448,256,448Z"
          style={{ fill: 'none', stroke: 'currentColor', strokeMiterlimit: '10', strokeWidth: '32px' }}
        />
        <path d="M192,176a16,16,0,0,1,16,16v53l111.68-67.46A10.78,10.78,0,0,1,336,186.87V325.13a10.78,10.78,0,0,1-16.32,9.31L208,267v53a16,16,0,0,1-32,0V192A16,16,0,0,1,192,176Z" />
      </svg>
    </>
  )
}
