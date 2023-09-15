import React, { SVGProps } from 'react'

type LockOpenSharpProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function LockOpenSharp({ extraStyles, ...rest }: LockOpenSharpProps) {
  const defaultProps: LockOpenSharpProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: LockOpenSharpProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <path d="M420,192H198V111.25a58.08,58.08,0,0,1,99.07-41.07A59.4,59.4,0,0,1,314,112h38a96,96,0,1,0-192,0v80H92a12,12,0,0,0-12,12V484a12,12,0,0,0,12,12H420a12,12,0,0,0,12-12V204A12,12,0,0,0,420,192Z" />
      </svg>
    </>
  )
}
