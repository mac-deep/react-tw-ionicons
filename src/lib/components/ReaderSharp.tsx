import React, { SVGProps } from 'react'

type ReaderSharpProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function ReaderSharp({ extraStyles, ...rest }: ReaderSharpProps) {
  const defaultProps: ReaderSharpProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: ReaderSharpProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <path d="M80,44V468a12,12,0,0,0,12,12H420a12,12,0,0,0,12-12V44a12,12,0,0,0-12-12H92A12,12,0,0,0,80,44ZM272,304H160V272H272Zm80-80H160V192H352Zm0-80H160V112H352Z" />
      </svg>
    </>
  )
}
