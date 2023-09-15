import React, { SVGProps } from 'react'

type ChevronExpandOutlineProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function ChevronExpandOutline({ extraStyles, ...rest }: ChevronExpandOutlineProps) {
  const defaultProps: ChevronExpandOutlineProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: ChevronExpandOutlineProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" {...mergedProps}>
        <path
          d="M136 208L256 104L376 208"
          stroke="currentColor"
          fill="none"
          strokeWidth="32"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M136 304L256 408L376 304"
          stroke="currentColor"
          fill="none"
          strokeWidth="32"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  )
}
