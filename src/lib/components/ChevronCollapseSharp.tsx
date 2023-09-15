import React, { SVGProps } from 'react'

type ChevronCollapseSharpProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function ChevronCollapseSharp({ extraStyles, ...rest }: ChevronCollapseSharpProps) {
  const defaultProps: ChevronCollapseSharpProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: ChevronCollapseSharpProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" {...mergedProps}>
        <path d="M102.145 108.514L256 241.855l153.855-133.341-31.437-36.273L256 178.337 133.582 72.241l-31.437 36.273zm0 294.972L256 270.145l153.855 133.341-31.437 36.273L256 333.663 133.582 439.759l-31.437-36.273z" />
      </svg>
    </>
  )
}
