import React, { SVGProps } from 'react'

type LogoAmplifyProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function LogoAmplify({ extraStyles, ...rest }: LogoAmplifyProps) {
  const defaultProps: LogoAmplifyProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: LogoAmplifyProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <path
          d="M112.31,268l40.36-68.69,34.65,59-67.54,115h135L289.31,432H16Zm58.57-99.76,33.27-56.67L392.44,432H325.76ZM222.67,80h66.59L496,432H429.32Z"
          style={{ fillRule: 'evenodd' }}
        />
      </svg>
    </>
  )
}
