import React, { SVGProps } from 'react'

type CheckboxProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function Checkbox({ extraStyles, ...rest }: CheckboxProps) {
  const defaultProps: CheckboxProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: CheckboxProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <path d="M400,48H112a64.07,64.07,0,0,0-64,64V400a64.07,64.07,0,0,0,64,64H400a64.07,64.07,0,0,0,64-64V112A64.07,64.07,0,0,0,400,48ZM364.25,186.29l-134.4,160a16,16,0,0,1-12,5.71h-.27a16,16,0,0,1-11.89-5.3l-57.6-64a16,16,0,1,1,23.78-21.4l45.29,50.32L339.75,165.71a16,16,0,0,1,24.5,20.58Z" />
      </svg>
    </>
  )
}
