import { SVGProps, SVGAttributes } from 'react'

type MailOpenOutlineProps = {
  extraStyles?: SVGAttributes<SVGElement>['style']
  extraClasses?: SVGAttributes<SVGElement>['className']
} & Omit<SVGProps<SVGSVGElement>, 'style' | 'className'>

export default function MailOpenOutline({ extraStyles, extraClasses, ...rest }: MailOpenOutlineProps) {
  const defaultProps: MailOpenOutlineProps = {
    width: '20px',
    height: '20px',
    extraClasses: '',
  }

  const mergedProps: MailOpenOutlineProps = { ...defaultProps, ...rest }

  return (
    <>
      <svg
        className={`[&>*]:stroke-current fill-current  ${extraClasses}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        {...mergedProps}
      >
        <path
          d="M441.6,171.61,266.87,85.37a24.57,24.57,0,0,0-21.74,0L70.4,171.61A40,40,0,0,0,48,207.39V392c0,22.09,18.14,40,40.52,40h335c22.38,0,40.52-17.91,40.52-40V207.39A40,40,0,0,0,441.6,171.61Z"
          style={{
            fill: 'none',
            stroke: 'currentColor',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '32px',
          }}
        />
        <path
          d="M397.33,368,268.07,267.46a24,24,0,0,0-29.47,0L109.33,368"
          style={{
            fill: 'none',
            stroke: 'currentColor',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '32px',
          }}
        />
        <line
          x1="309.33"
          y1="295"
          x2="445.33"
          y2="192"
          style={{
            fill: 'none',
            stroke: 'currentColor',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '32px',
          }}
        />
        <line
          x1="61.33"
          y1="192"
          x2="200.33"
          y2="297"
          style={{
            fill: 'none',
            stroke: 'currentColor',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '32px',
          }}
        />
      </svg>
    </>
  )
}
