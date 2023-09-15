import React, { SVGProps } from 'react'

type FlaskSharpProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function FlaskSharp({ extraStyles, ...rest }: FlaskSharpProps) {
  const defaultProps: FlaskSharpProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: FlaskSharpProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <path d="M469.11,382.76,325,153.92V74h32V32H155V74h32v79.92L42.89,382.76c-13,20.64-14.78,43.73-3,65.1S71.59,480,96,480H416c24.41,0,44.32-10.76,56.1-32.14S482.14,403.4,469.11,382.76ZM224.39,173.39a29.76,29.76,0,0,0,4.62-16V74h54v84.59a25.85,25.85,0,0,0,4,13.82L356.82,283H155.18Z" />
      </svg>
    </>
  )
}
