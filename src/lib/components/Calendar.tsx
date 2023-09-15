import React, { SVGProps } from 'react'

type CalendarProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function Calendar({ extraStyles, ...rest }: CalendarProps) {
  const defaultProps: CalendarProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: CalendarProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <path d="M480,128a64,64,0,0,0-64-64H400V48.45c0-8.61-6.62-16-15.23-16.43A16,16,0,0,0,368,48V64H144V48.45c0-8.61-6.62-16-15.23-16.43A16,16,0,0,0,112,48V64H96a64,64,0,0,0-64,64v12a4,4,0,0,0,4,4H476a4,4,0,0,0,4-4Z" />
        <path d="M32,416a64,64,0,0,0,64,64H416a64,64,0,0,0,64-64V179a3,3,0,0,0-3-3H35a3,3,0,0,0-3,3ZM376,208a24,24,0,1,1-24,24A24,24,0,0,1,376,208Zm0,80a24,24,0,1,1-24,24A24,24,0,0,1,376,288Zm-80-80a24,24,0,1,1-24,24A24,24,0,0,1,296,208Zm0,80a24,24,0,1,1-24,24A24,24,0,0,1,296,288Zm0,80a24,24,0,1,1-24,24A24,24,0,0,1,296,368Zm-80-80a24,24,0,1,1-24,24A24,24,0,0,1,216,288Zm0,80a24,24,0,1,1-24,24A24,24,0,0,1,216,368Zm-80-80a24,24,0,1,1-24,24A24,24,0,0,1,136,288Zm0,80a24,24,0,1,1-24,24A24,24,0,0,1,136,368Z" />
      </svg>
    </>
  )
}
