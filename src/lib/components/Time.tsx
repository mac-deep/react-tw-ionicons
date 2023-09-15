import React, { SVGProps } from 'react'

type TimeProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function Time({ extraStyles, ...rest }: TimeProps) {
  const defaultProps: TimeProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: TimeProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <path d="M256,48C141.13,48,48,141.13,48,256s93.13,208,208,208,208-93.13,208-208S370.87,48,256,48Zm96,240H256a16,16,0,0,1-16-16V128a16,16,0,0,1,32,0V256h80a16,16,0,0,1,0,32Z" />
      </svg>
    </>
  )
}
