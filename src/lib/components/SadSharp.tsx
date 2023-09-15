import React, { SVGProps } from 'react'

type SadSharpProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function SadSharp({ extraStyles, ...rest }: SadSharpProps) {
  const defaultProps: SadSharpProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: SadSharpProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <path d="M414.39,97.61A224,224,0,1,0,97.61,414.39,224,224,0,1,0,414.39,97.61ZM328,208a24,24,0,1,1-24,24A23.94,23.94,0,0,1,328,208Zm-144,0a24,24,0,1,1-24,24A23.94,23.94,0,0,1,184,208ZM256,288c45.42,0,83.75,29.49,95.72,69.83,1,3.52,2.33,10.17,2.33,10.17H158s1.31-6.69,2.33-10.17C172.11,317.47,210.53,288,256,288Z" />
      </svg>
    </>
  )
}
