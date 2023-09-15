import React, { SVGProps } from 'react'

type TabletLandscapeSharpProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function TabletLandscapeSharp({ extraStyles, ...rest }: TabletLandscapeSharpProps) {
  const defaultProps: TabletLandscapeSharpProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: TabletLandscapeSharpProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <path d="M0,82V430a18,18,0,0,0,18,18H494a18,18,0,0,0,18-18V82a18,18,0,0,0-18-18H18A18,18,0,0,0,0,82ZM448,412H64V100H448Z" />
      </svg>
    </>
  )
}
