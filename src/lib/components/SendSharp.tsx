import React, { SVGProps } from 'react'

type SendSharpProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function SendSharp({ extraStyles, ...rest }: SendSharpProps) {
  const defaultProps: SendSharpProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: SendSharpProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <path d="M16,464,496,256,16,48V208l320,48L16,304Z" />
      </svg>
    </>
  )
}
