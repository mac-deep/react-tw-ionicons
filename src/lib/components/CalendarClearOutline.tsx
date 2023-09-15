import React, { SVGProps } from 'react'

type CalendarClearOutlineProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function CalendarClearOutline({ extraStyles, ...rest }: CalendarClearOutlineProps) {
  const defaultProps: CalendarClearOutlineProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: CalendarClearOutlineProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <rect
          fill="none"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="32"
          x="48"
          y="80"
          width="416"
          height="384"
          rx="48"
        />
        <line
          fill="none"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="32"
          strokeLinecap="round"
          x1="128"
          y1="48"
          x2="128"
          y2="80"
        />
        <line
          fill="none"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="32"
          strokeLinecap="round"
          x1="384"
          y1="48"
          x2="384"
          y2="80"
        />
        <line
          fill="none"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="32"
          strokeLinecap="round"
          x1="464"
          y1="160"
          x2="48"
          y2="160"
        />
      </svg>
    </>
  )
}
