import React, { SVGProps } from 'react'

type DownloadSharpProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function DownloadSharp({ extraStyles, ...rest }: DownloadSharpProps) {
  const defaultProps: DownloadSharpProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: DownloadSharpProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <path d="M272,160V307.37l64-64L358.63,266,256,368.63,153.37,266,176,243.37l64,64V160H92a12,12,0,0,0-12,12V468a12,12,0,0,0,12,12H420a12,12,0,0,0,12-12V172a12,12,0,0,0-12-12Z" />
        <rect x="240" y="32" width="32" height="128" />
      </svg>
    </>
  )
}
