import { SVGProps, SVGAttributes } from 'react'

type AppsSharpProps = {
  extraStyles?: SVGAttributes<SVGElement>['style']
  extraClasses?: SVGAttributes<SVGElement>['className']
} & Omit<SVGProps<SVGSVGElement>, 'style' | 'className'>

export default function AppsSharp({ extraStyles, extraClasses, ...rest }: AppsSharpProps) {
  const defaultProps: AppsSharpProps = {
    width: '20px',
    height: '20px',
    extraClasses: '',
  }

  const mergedProps: AppsSharpProps = { ...defaultProps, ...rest }

  return (
    <>
      <svg
        className={`[&>*]:stroke-current fill-current  ${extraClasses}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        {...mergedProps}
      >
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
