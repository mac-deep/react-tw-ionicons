import React, { SVGProps } from 'react'

type AttachOutlineProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function AttachOutline({ extraStyles, ...rest }: AttachOutlineProps) {
  const defaultProps: AttachOutlineProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: AttachOutlineProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <path
          d="M216.08,192V335.85a40.08,40.08,0,0,0,80.15,0l.13-188.55a67.94,67.94,0,1,0-135.87,0V337.12a95.51,95.51,0,1,0,191,0V159.74"
          style={{
            fill: 'none',
            stroke: 'currentColor',
            strokeLinecap: 'round',
            strokeMiterlimit: '10',
            strokeWidth: '32px',
          }}
        />
      </svg>
    </>
  )
}
