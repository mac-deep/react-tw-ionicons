import React, { SVGProps } from 'react'

type CopySharpProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function CopySharp({ extraStyles, ...rest }: CopySharpProps) {
  const defaultProps: CopySharpProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: CopySharpProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <path d="M456,480H136a24,24,0,0,1-24-24V128a16,16,0,0,1,16-16H456a24,24,0,0,1,24,24V456A24,24,0,0,1,456,480Z" />
        <path d="M112,80H400V56a24,24,0,0,0-24-24H60A28,28,0,0,0,32,60V376a24,24,0,0,0,24,24H80V112A32,32,0,0,1,112,80Z" />
      </svg>
    </>
  )
}
