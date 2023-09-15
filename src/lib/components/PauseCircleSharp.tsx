import React, { SVGProps } from 'react'

type PauseCircleSharpProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function PauseCircleSharp({ extraStyles, ...rest }: PauseCircleSharpProps) {
  const defaultProps: PauseCircleSharpProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: PauseCircleSharpProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <path d="M256,48C141.31,48,48,141.31,48,256s93.31,208,208,208,208-93.31,208-208S370.69,48,256,48ZM224,336H192V176h32Zm96,0H288V176h32Z" />
      </svg>
    </>
  )
}
