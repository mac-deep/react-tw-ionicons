import React, { SVGProps } from 'react'

type LogoCapacitorProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function LogoCapacitor({ extraStyles, ...rest }: LogoCapacitorProps) {
  const defaultProps: LogoCapacitorProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: LogoCapacitorProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <path d="M480,101.09,372.37,208.72,479.23,315.78l-69.3,69.3L126.71,101.85,196,32.54,303.07,139.42,410.67,32Z" />
        <path d="M32.55,196l69.3-69.31L385.07,409.93l-69.3,69.3-107-106.87L101.08,480,32,410.67,139.42,303.06Z" />
      </svg>
    </>
  )
}
