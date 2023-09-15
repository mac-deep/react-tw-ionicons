import React, { SVGProps } from 'react'

type DocumentTextSharpProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function DocumentTextSharp({ extraStyles, ...rest }: DocumentTextSharpProps) {
  const defaultProps: DocumentTextSharpProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: DocumentTextSharpProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <path d="M272,41.69V188a4,4,0,0,0,4,4H422.31a2,2,0,0,0,1.42-3.41L275.41,40.27A2,2,0,0,0,272,41.69Z" />
        <path d="M248,224a8,8,0,0,1-8-8V32H92A12,12,0,0,0,80,44V468a12,12,0,0,0,12,12H420a12,12,0,0,0,12-12V224ZM352,384H160V352H352Zm0-80H160V272H352Z" />
      </svg>
    </>
  )
}
