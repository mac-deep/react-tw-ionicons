import React, { SVGProps } from 'react'

type PlaySkipBackCircleSharpProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function PlaySkipBackCircleSharp({ extraStyles, ...rest }: PlaySkipBackCircleSharpProps) {
  const defaultProps: PlaySkipBackCircleSharpProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: PlaySkipBackCircleSharpProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <path d="M48,256c0,114.69,93.31,208,208,208s208-93.31,208-208S370.69,48,256,48,48,141.31,48,256Zm128-80h32v69l128-77.53V344.37L208,267v69H176Z" />
      </svg>
    </>
  )
}
