import React, { SVGProps } from 'react'

type InvertModeSharpProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function InvertModeSharp({ extraStyles, ...rest }: InvertModeSharpProps) {
  const defaultProps: InvertModeSharpProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: InvertModeSharpProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <path d="M414.39,97.61A224,224,0,1,0,97.61,414.39,224,224,0,1,0,414.39,97.61ZM256,432V336a80,80,0,0,1,0-160V80C353.05,80,432,159,432,256S353.05,432,256,432Z" />
        <path d="M336,256a80,80,0,0,0-80-80V336A80,80,0,0,0,336,256Z" />
      </svg>
    </>
  )
}
