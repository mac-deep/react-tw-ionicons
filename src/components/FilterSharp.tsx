import { SVGProps, SVGAttributes } from 'react'

type FilterSharpProps = {
  extraStyles?: SVGAttributes<SVGElement>['style']
  extraClasses?: SVGAttributes<SVGElement>['className']
} & Omit<SVGProps<SVGSVGElement>, 'style' | 'className'>

export default function FilterSharp({ extraStyles, extraClasses, ...rest }: FilterSharpProps) {
  const defaultProps: FilterSharpProps = {
    width: '20px',
    height: '20px',
    extraClasses: '',
  }

  const mergedProps: FilterSharpProps = { ...defaultProps, ...rest }

  return (
    <>
      <svg
        className={`[&>*]:stroke-current fill-current  ${extraClasses}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        {...mergedProps}
      >
        <rect x="16" y="120" width="480" height="48" />
        <rect x="96" y="232" width="320" height="48" />
        <rect x="192" y="344" width="128" height="48" />
      </svg>
    </>
  )
}
