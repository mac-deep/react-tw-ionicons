import React, { SVGProps } from 'react'

type PlayBackCircleSharpProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function PlayBackCircleSharp({ extraStyles, ...rest }: PlayBackCircleSharpProps) {
  const defaultProps: PlayBackCircleSharpProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: PlayBackCircleSharpProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <path d="M48,256c0,114.69,93.31,208,208,208s208-93.31,208-208S370.69,48,256,48,48,141.31,48,256Zm63.47,0L248,168v72.16l120-72.48V344.13L248,271.81v71.44Z" />
      </svg>
    </>
  )
}
