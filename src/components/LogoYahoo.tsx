import { SVGProps, SVGAttributes } from 'react'

type LogoYahooProps = {
  extraStyles?: SVGAttributes<SVGElement>['style']
  extraClasses?: SVGAttributes<SVGElement>['className']
} & Omit<SVGProps<SVGSVGElement>, 'style' | 'className'>

export default function LogoYahoo({ extraStyles, extraClasses, ...rest }: LogoYahooProps) {
  const defaultProps: LogoYahooProps = {
    width: '20px',
    height: '20px',
    extraClasses: '',
  }

  const mergedProps: LogoYahooProps = { ...defaultProps, ...rest }

  return (
    <>
      <svg
        className={`[&>*]:stroke-current fill-current  ${extraClasses}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        {...mergedProps}
      >
        <path d="M410.32,37.13c-13.56,0-27-.93-39.12-5.13L256,218.67,140.8,32c-12.12,4.2-24.84,5.13-38.4,5.13C89.08,37.13,75.88,36.08,64,32L217.6,280.15V480c12-4.08,25-5.13,38.4-5.13s26.4,1.05,38.4,5.13V280.5L448,32C436.12,36,423.64,37.13,410.32,37.13Z" />
      </svg>
    </>
  )
}
