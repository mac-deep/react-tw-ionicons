import React, { SVGProps } from 'react'

type DocumentLockProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function DocumentLock({ extraStyles, ...rest }: DocumentLockProps) {
  const defaultProps: DocumentLockProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: DocumentLockProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <path d="M288,192H417.81a2,2,0,0,0,1.41-3.41L275.41,44.78A2,2,0,0,0,272,46.19V176A16,16,0,0,0,288,192Z" />
        <path d="M256,272c-8.82,0-16,6.28-16,14v18h32V286C272,278.28,264.82,272,256,272Z" />
        <path d="M428,224H288a48,48,0,0,1-48-48V36a4,4,0,0,0-4-4H144A64,64,0,0,0,80,96V416a64,64,0,0,0,64,64H368a64,64,0,0,0,64-64V228A4,4,0,0,0,428,224ZM336,384a32,32,0,0,1-32,32H208a32,32,0,0,1-32-32V336a32,32,0,0,1,32-32V286c0-25.36,21.53-46,48-46s48,20.64,48,46v18a32,32,0,0,1,32,32Z" />
      </svg>
    </>
  )
}
