import React, { SVGProps } from 'react'

type FileTrayFullSharpProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function FileTrayFullSharp({ extraStyles, ...rest }: FileTrayFullSharpProps) {
  const defaultProps: FileTrayFullSharpProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: FileTrayFullSharpProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <rect x="128" y="128" width="256" height="38" />
        <rect x="112" y="192" width="288" height="38" />
        <path d="M448,64H64L32,256V448H480V256ZM436,256H320a64,64,0,0,1-128,0H76L98,106H414Z" />
      </svg>
    </>
  )
}
