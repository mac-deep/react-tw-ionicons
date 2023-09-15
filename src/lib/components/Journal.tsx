import React, { SVGProps } from 'react'

type JournalProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function Journal({ extraStyles, ...rest }: JournalProps) {
  const defaultProps: JournalProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: JournalProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <path d="M290,32H144A64.07,64.07,0,0,0,80,96V416a64.07,64.07,0,0,0,64,64H290Z" />
        <path d="M368,32H350V480h18a64.07,64.07,0,0,0,64-64V96A64.07,64.07,0,0,0,368,32Z" />
      </svg>
    </>
  )
}
