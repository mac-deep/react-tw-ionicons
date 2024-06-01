import { SVGProps, SVGAttributes } from 'react'

type BarChartSharpProps = {
  extraStyles?: SVGAttributes<SVGElement>['style']
  extraClasses?: SVGAttributes<SVGElement>['className']
} & Omit<SVGProps<SVGSVGElement>, 'style' | 'className'>

export default function BarChartSharp({ extraStyles, extraClasses, ...rest }: BarChartSharpProps) {
  const defaultProps: BarChartSharpProps = {
    width: '20px',
    height: '20px',
    extraClasses: '',
  }

  const mergedProps: BarChartSharpProps = { ...defaultProps, ...rest }

  return (
    <>
      <svg
        className={`[&>*]:stroke-current fill-current  ${extraClasses}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        {...mergedProps}
      >
        <polygon points="496 496 16 496 16 16 48 16 48 464 496 464 496 496" />
        <path d="M192,432H80V208H192Z" />
        <path d="M336,432H224V160H336Z" />
        <path d="M479.64,432h-112V96h112Z" />
      </svg>
    </>
  )
}
