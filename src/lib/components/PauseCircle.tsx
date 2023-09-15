import React, { SVGProps } from 'react'

type PauseCircleProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function PauseCircle({ extraStyles, ...rest }: PauseCircleProps) {
  const defaultProps: PauseCircleProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: PauseCircleProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <path d="M256,48C141.31,48,48,141.31,48,256s93.31,208,208,208,208-93.31,208-208S370.69,48,256,48ZM224,320a16,16,0,0,1-32,0V192a16,16,0,0,1,32,0Zm96,0a16,16,0,0,1-32,0V192a16,16,0,0,1,32,0Z" />
      </svg>
    </>
  )
}
