import React, { SVGProps } from 'react'

type PhoneLandscapeProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function PhoneLandscape({ extraStyles, ...rest }: PhoneLandscapeProps) {
  const defaultProps: PhoneLandscapeProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: PhoneLandscapeProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <path d="M0,176V336a64,64,0,0,0,64,64H448a64,64,0,0,0,64-64V176a64,64,0,0,0-64-64H64A64,64,0,0,0,0,176Zm448-32a32,32,0,0,1,32,32V336a32,32,0,0,1-32,32H64a32,32,0,0,1-32-32V324.65a7.94,7.94,0,0,1,4.75-7.3A32,32,0,0,0,56,288V224a32,32,0,0,0-19.25-29.35,7.94,7.94,0,0,1-4.75-7.3V176a32,32,0,0,1,32-32Z" />
        <path d="M48,176h0a11.88,11.88,0,0,0,4.69,9.53A48,48,0,0,1,72,224v64a48,48,0,0,1-19.31,38.47A11.88,11.88,0,0,0,48,336h0a16,16,0,0,0,16,16H448a16,16,0,0,0,16-16V176a16,16,0,0,0-16-16H64A16,16,0,0,0,48,176Z" />
        <path d="M0,176V336a64,64,0,0,0,64,64H448a64,64,0,0,0,64-64V176a64,64,0,0,0-64-64H64A64,64,0,0,0,0,176Zm448-32a32,32,0,0,1,32,32V336a32,32,0,0,1-32,32H64a32,32,0,0,1-32-32V324.65a7.94,7.94,0,0,1,4.75-7.3A32,32,0,0,0,56,288V224a32,32,0,0,0-19.25-29.35,7.94,7.94,0,0,1-4.75-7.3V176a32,32,0,0,1,32-32Z" />
      </svg>
    </>
  )
}
