import { SVGProps, SVGAttributes } from 'react'

type StatsChartSharpProps = {
  extraStyles?: SVGAttributes<SVGElement>['style']
  extraClasses?: SVGAttributes<SVGElement>['className']
} & Omit<SVGProps<SVGSVGElement>, 'style' | 'className'>

export default function StatsChartSharp({ extraStyles, extraClasses, ...rest }: StatsChartSharpProps) {
  const defaultProps: StatsChartSharpProps = {
    width: '20px',
    height: '20px',
    extraClasses: '',
  }

  const mergedProps: StatsChartSharpProps = { ...defaultProps, ...rest }

  return (
    <>
      <svg
        className={`[&>*]:stroke-current fill-current  ${extraClasses}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        {...mergedProps}
      >
        <path d="M128,496H48V304h80Z" />
        <path d="M352,496H272V208h80Z" />
        <path d="M464,496H384V96h80Z" />
        <path d="M240,496H160V16h80Z" />
      </svg>
    </>
  )
}
