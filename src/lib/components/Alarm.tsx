import React, { SVGProps } from 'react'

type AlarmProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function Alarm({ extraStyles, ...rest }: AlarmProps) {
  const defaultProps: AlarmProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: AlarmProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <path d="M153.59,110.46A21.41,21.41,0,0,0,152.48,79h0A62.67,62.67,0,0,0,112,64l-3.27.09-.48,0C74.4,66.15,48,95.55,48.07,131c0,19,8,29.06,14.32,37.11a20.61,20.61,0,0,0,14.7,7.8c.26,0,.7.05,2,.05a19.06,19.06,0,0,0,13.75-5.89Z" />
        <path d="M403.79,64.11l-3.27-.1H400a62.67,62.67,0,0,0-40.52,15,21.41,21.41,0,0,0-1.11,31.44l60.77,59.65A19.06,19.06,0,0,0,432.93,176c1.28,0,1.72,0,2-.05a20.61,20.61,0,0,0,14.69-7.8c6.36-8.05,14.28-18.08,14.32-37.11C464,95.55,437.6,66.15,403.79,64.11Z" />
        <path d="M256.07,96c-97,0-176,78.95-176,176a175.23,175.23,0,0,0,40.81,112.56L84.76,420.69a16,16,0,1,0,22.63,22.62l36.12-36.12a175.63,175.63,0,0,0,225.12,0l36.13,36.12a16,16,0,1,0,22.63-22.62l-36.13-36.13A175.17,175.17,0,0,0,432.07,272C432.07,175,353.12,96,256.07,96Zm16,176a16,16,0,0,1-16,16h-80a16,16,0,0,1,0-32h64V160a16,16,0,0,1,32,0Z" />
      </svg>
    </>
  )
}
