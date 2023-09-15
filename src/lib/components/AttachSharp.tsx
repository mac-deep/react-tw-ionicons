import React, { SVGProps } from 'react'

type AttachSharpProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function AttachSharp({ extraStyles, ...rest }: AttachSharpProps) {
  const defaultProps: AttachSharpProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: AttachSharpProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <path
          d="M216.08,192V335.55a40.08,40.08,0,0,0,80.15,0L296.36,147a67.94,67.94,0,1,0-135.87,0V336.82a95.51,95.51,0,0,0,191,0V159.44"
          style={{
            fill: 'none',
            stroke: 'currentColor',
            strokeLinecap: 'square',
            strokeMiterlimit: '10',
            strokeWidth: '32px',
          }}
        />
      </svg>
    </>
  )
}
