import React, { SVGProps } from 'react'

type RecordingSharpProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function RecordingSharp({ extraStyles, ...rest }: RecordingSharpProps) {
  const defaultProps: RecordingSharpProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: RecordingSharpProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <path d="M384,138a117.93,117.93,0,0,0-91.84,192H219.84A118,118,0,1,0,128,374H384a118,118,0,0,0,0-236ZM54,256a74,74,0,1,1,74,74A74.09,74.09,0,0,1,54,256Zm330,74a74,74,0,1,1,74-74A74.09,74.09,0,0,1,384,330Z" />
      </svg>
    </>
  )
}
