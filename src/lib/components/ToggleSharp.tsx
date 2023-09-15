import React, { SVGProps } from 'react'

type ToggleSharpProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function ToggleSharp({ extraStyles, ...rest }: ToggleSharpProps) {
  const defaultProps: ToggleSharpProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: ToggleSharpProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <path d="M368,112H144a144,144,0,0,0,0,288H368a144,144,0,0,0,0-288Zm0,230a86,86,0,1,1,86-86A85.88,85.88,0,0,1,368,342Z" />
      </svg>
    </>
  )
}
