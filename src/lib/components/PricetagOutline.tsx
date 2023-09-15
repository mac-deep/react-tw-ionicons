import React, { SVGProps } from 'react'

type PricetagOutlineProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function PricetagOutline({ extraStyles, ...rest }: PricetagOutlineProps) {
  const defaultProps: PricetagOutlineProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: PricetagOutlineProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <path
          d="M435.25,48H312.35a14.46,14.46,0,0,0-10.2,4.2L56.45,297.9a28.85,28.85,0,0,0,0,40.7l117,117a28.85,28.85,0,0,0,40.7,0L459.75,210a14.46,14.46,0,0,0,4.2-10.2V76.8A28.66,28.66,0,0,0,435.25,48Z"
          style={{
            fill: 'none',
            stroke: 'currentColor',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '32px',
          }}
        />
        <path d="M384,160a32,32,0,1,1,32-32A32,32,0,0,1,384,160Z" />
      </svg>
    </>
  )
}
