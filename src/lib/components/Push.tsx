import React, { SVGProps } from 'react'

type PushProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function Push({ extraStyles, ...rest }: PushProps) {
  const defaultProps: PushProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: PushProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <path d="M376,352H272V198.63l52.69,52.68a16,16,0,0,0,22.62-22.62l-80-80a16,16,0,0,0-22.62,0l-80,80a16,16,0,0,0,22.62,22.62L240,198.63V352H136a56.06,56.06,0,0,1-56-56V88a56.06,56.06,0,0,1,56-56H376a56.06,56.06,0,0,1,56,56V296A56.06,56.06,0,0,1,376,352Z" />
        <path d="M272,464a16,16,0,0,1-32,0V352h32Z" />
      </svg>
    </>
  )
}
