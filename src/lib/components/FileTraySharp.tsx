import React, { SVGProps } from 'react'

type FileTraySharpProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function FileTraySharp({ extraStyles, ...rest }: FileTraySharpProps) {
  const defaultProps: FileTraySharpProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: FileTraySharpProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <path d="M448,64H64L32,256V448H480V256ZM436,256H320a64,64,0,0,1-128,0H76L98,106H414Z" />
      </svg>
    </>
  )
}
