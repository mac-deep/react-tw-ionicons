import React, { SVGProps } from 'react'

type AnalyticsProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function Analytics({ extraStyles, ...rest }: AnalyticsProps) {
  const defaultProps: AnalyticsProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: AnalyticsProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <path d="M456,128a40,40,0,0,0-37.23,54.6L334.6,266.77a39.86,39.86,0,0,0-29.2,0L245.23,206.6a40,40,0,1,0-74.46,0L70.6,306.77A40,40,0,1,0,93.23,329.4L193.4,229.23a39.86,39.86,0,0,0,29.2,0l60.17,60.17a40,40,0,1,0,74.46,0l84.17-84.17A40,40,0,1,0,456,128Z" />
      </svg>
    </>
  )
}
