import React, { SVGProps } from 'react'

type CalendarNumberOutlineProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function CalendarNumberOutline({ extraStyles, ...rest }: CalendarNumberOutlineProps) {
  const defaultProps: CalendarNumberOutlineProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: CalendarNumberOutlineProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg id="icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <rect
          x="48"
          y="80"
          width="416"
          height="384"
          rx="48"
          fill="none"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="32"
        />
        <line
          x1="128"
          y1="48"
          x2="128"
          y2="80"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="32"
        />
        <line
          x1="384"
          y1="48"
          x2="384"
          y2="80"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="32"
        />
        <line
          x1="464"
          y1="160"
          x2="48"
          y2="160"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="32"
        />
        <polyline
          points="304 260 347.42 228 352 228 352 396"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="32"
        />
        <path
          d="M191.87,306.63c9.11,0,25.79-4.28,36.72-15.47a37.9,37.9,0,0,0,11.13-27.26c0-26.12-22.59-39.9-47.89-39.9-21.4,0-33.52,11.61-37.85,18.93"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="32"
        />
        <path
          d="M149,374.16c4.88,8.27,19.71,25.84,43.88,25.84,28.59,0,52.12-15.94,52.12-43.82,0-12.62-3.66-24-11.58-32.07-12.36-12.64-31.25-17.48-41.55-17.48"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="32"
        />
      </svg>
    </>
  )
}
