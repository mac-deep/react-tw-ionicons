import React, { SVGProps } from 'react'

type LogOutSharpProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function LogOutSharp({ extraStyles, ...rest }: LogOutSharpProps) {
  const defaultProps: LogOutSharpProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: LogOutSharpProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <path d="M160,240H320V96a16,16,0,0,0-16-16H64A16,16,0,0,0,48,96V416a16,16,0,0,0,16,16H304a16,16,0,0,0,16-16V272H160Z" />
        <path d="M459.31,244.69,368,153.37,345.37,176l64,64H320v32h89.37l-64,64L368,358.63l91.31-91.32a16,16,0,0,0,0-22.62Z" />
      </svg>
    </>
  )
}
