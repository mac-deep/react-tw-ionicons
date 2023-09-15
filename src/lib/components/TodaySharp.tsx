import React, { SVGProps } from 'react'

type TodaySharpProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function TodaySharp({ extraStyles, ...rest }: TodaySharpProps) {
  const defaultProps: TodaySharpProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: TodaySharpProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <path d="M32,456a24,24,0,0,0,24,24H456a24,24,0,0,0,24-24V176H32Zm80-238.86a9.14,9.14,0,0,1,9.14-9.14H230.86a9.14,9.14,0,0,1,9.14,9.14V326.86a9.14,9.14,0,0,1-9.14,9.14H121.14a9.14,9.14,0,0,1-9.14-9.14Z" />
        <path d="M456,64H400.08V32h-48V64H159.92V32h-48V64H56A23.8,23.8,0,0,0,32,87.77V144H480V87.77A23.8,23.8,0,0,0,456,64Z" />
      </svg>
    </>
  )
}
