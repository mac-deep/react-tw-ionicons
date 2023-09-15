import React, { SVGProps } from 'react'

type ChevronExpandProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function ChevronExpand({ extraStyles, ...rest }: ChevronExpandProps) {
  const defaultProps: ChevronExpandProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: ChevronExpandProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" {...mergedProps}>
        <path
          d="M136 208L256 104L376 208"
          fill="none"
          stroke="currentColor"
          strokeWidth="48"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M136 304L256 408L376 304"
          fill="none"
          stroke="currentColor"
          strokeWidth="48"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  )
}
