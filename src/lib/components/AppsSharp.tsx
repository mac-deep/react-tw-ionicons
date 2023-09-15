import React, { SVGProps } from 'react'

type AppsSharpProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function AppsSharp({ extraStyles, ...rest }: AppsSharpProps) {
  const defaultProps: AppsSharpProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: AppsSharpProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <rect x="48" y="48" width="112" height="112" rx="8" ry="8" />
        <rect x="200" y="48" width="112" height="112" rx="8" ry="8" />
        <rect x="352" y="48" width="112" height="112" rx="8" ry="8" />
        <rect x="48" y="200" width="112" height="112" rx="8" ry="8" />
        <rect x="200" y="200" width="112" height="112" rx="8" ry="8" />
        <rect x="352" y="200" width="112" height="112" rx="8" ry="8" />
        <rect x="48" y="352" width="112" height="112" rx="8" ry="8" />
        <rect x="200" y="352" width="112" height="112" rx="8" ry="8" />
        <rect x="352" y="352" width="112" height="112" rx="8" ry="8" />
      </svg>
    </>
  )
}
