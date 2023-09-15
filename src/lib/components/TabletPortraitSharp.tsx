import React, { SVGProps } from 'react'

type TabletPortraitSharpProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function TabletPortraitSharp({ extraStyles, ...rest }: TabletPortraitSharpProps) {
  const defaultProps: TabletPortraitSharpProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: TabletPortraitSharpProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <path d="M430,0H82A18,18,0,0,0,64,18V494a18,18,0,0,0,18,18H430a18,18,0,0,0,18-18V18A18,18,0,0,0,430,0ZM100,448V64H412V448Z" />
      </svg>
    </>
  )
}
