import React, { SVGProps } from 'react'

type RemoveCircleProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function RemoveCircle({ extraStyles, ...rest }: RemoveCircleProps) {
  const defaultProps: RemoveCircleProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: RemoveCircleProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <path d="M256,48C141.31,48,48,141.31,48,256s93.31,208,208,208,208-93.31,208-208S370.69,48,256,48Zm80,224H176a16,16,0,0,1,0-32H336a16,16,0,0,1,0,32Z" />
      </svg>
    </>
  )
}
