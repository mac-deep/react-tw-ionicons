import React, { SVGProps } from 'react'

type HappyProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function Happy({ extraStyles, ...rest }: HappyProps) {
  const defaultProps: HappyProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: HappyProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <path d="M414.39,97.61A224,224,0,1,0,97.61,414.39,224,224,0,1,0,414.39,97.61ZM184,208a24,24,0,1,1-24,24A23.94,23.94,0,0,1,184,208ZM351.67,314.17c-12,40.3-50.2,69.83-95.62,69.83s-83.62-29.53-95.72-69.83A8,8,0,0,1,168.16,304H343.85A8,8,0,0,1,351.67,314.17ZM328,256a24,24,0,1,1,24-24A23.94,23.94,0,0,1,328,256Z" />
      </svg>
    </>
  )
}
