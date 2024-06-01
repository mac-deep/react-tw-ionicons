import { SVGProps, SVGAttributes } from 'react'

type KeypadSharpProps = {
  extraStyles?: SVGAttributes<SVGElement>['style']
  extraClasses?: SVGAttributes<SVGElement>['className']
} & Omit<SVGProps<SVGSVGElement>, 'style' | 'className'>

export default function KeypadSharp({ extraStyles, extraClasses, ...rest }: KeypadSharpProps) {
  const defaultProps: KeypadSharpProps = {
    width: '20px',
    height: '20px',
    extraClasses: '',
  }

  const mergedProps: KeypadSharpProps = { ...defaultProps, ...rest }

  return (
    <>
      <svg
        className={`[&>*]:stroke-current fill-current  ${extraClasses}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        {...mergedProps}
      >
        <rect x="80" y="16" width="96" height="96" rx="8" ry="8" />
        <rect x="208" y="16" width="96" height="96" rx="8" ry="8" />
        <rect x="336" y="16" width="96" height="96" rx="8" ry="8" />
        <rect x="80" y="144" width="96" height="96" rx="8" ry="8" />
        <rect x="208" y="144" width="96" height="96" rx="8" ry="8" />
        <rect x="336" y="144" width="96" height="96" rx="8" ry="8" />
        <rect x="80" y="272" width="96" height="96" rx="8" ry="8" />
        <rect x="208" y="272" width="96" height="96" rx="8" ry="8" />
        <rect x="208" y="400" width="96" height="96" rx="8" ry="8" />
        <rect x="336" y="272" width="96" height="96" rx="8" ry="8" />
      </svg>
    </>
  )
}
