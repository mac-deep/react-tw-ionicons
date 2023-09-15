import React, { SVGProps } from 'react'

type TrailSignSharpProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function TrailSignSharp({ extraStyles, ...rest }: TrailSignSharpProps) {
  const defaultProps: TrailSignSharpProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: TrailSignSharpProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <path d="M502.63,336l-80-80H278V224H448V64H278V32H234V64H89.37l-80,80,80,80H234v32H64V416H234v64h44V416H422.63Z" />
      </svg>
    </>
  )
}
