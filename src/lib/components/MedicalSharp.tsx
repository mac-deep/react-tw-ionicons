import React, { SVGProps } from 'react'

type MedicalSharpProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function MedicalSharp({ extraStyles, ...rest }: MedicalSharpProps) {
  const defaultProps: MedicalSharpProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: MedicalSharpProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <polygon points="351.9 256 460 193.6 412 110.4 304 172.8 304 48 208 48 208 172.8 100 110.4 52 193.6 160.1 256 52 318.4 100 401.6 208 339.2 208 464 304 464 304 339.2 412 401.6 460 318.4 351.9 256" />
      </svg>
    </>
  )
}
