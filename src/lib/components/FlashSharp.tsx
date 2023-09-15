import React, { SVGProps } from 'react'

type FlashSharpProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function FlashSharp({ extraStyles, ...rest }: FlashSharpProps) {
  const defaultProps: FlashSharpProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: FlashSharpProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <path d="M432,208H288L320,16,80,304H224L192,496Z" />
      </svg>
    </>
  )
}
