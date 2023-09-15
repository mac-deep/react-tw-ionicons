import React, { SVGProps } from 'react'

type SendOutlineProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function SendOutline({ extraStyles, ...rest }: SendOutlineProps) {
  const defaultProps: SendOutlineProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: SendOutlineProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <path
          d="M470.3,271.15,43.16,447.31a7.83,7.83,0,0,1-11.16-7V327a8,8,0,0,1,6.51-7.86l247.62-47c17.36-3.29,17.36-28.15,0-31.44l-247.63-47a8,8,0,0,1-6.5-7.85V72.59c0-5.74,5.88-10.26,11.16-8L470.3,241.76A16,16,0,0,1,470.3,271.15Z"
          style={{
            fill: 'none',
            stroke: 'currentColor',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '32px',
          }}
        />
      </svg>
    </>
  )
}
