import { SVGProps, SVGAttributes } from 'react'

type TodayOutlineProps = {
  extraStyles?: SVGAttributes<SVGElement>['style']
  extraClasses?: SVGAttributes<SVGElement>['className']
} & Omit<SVGProps<SVGSVGElement>, 'style' | 'className'>

export default function TodayOutline({ extraStyles, extraClasses, ...rest }: TodayOutlineProps) {
  const defaultProps: TodayOutlineProps = {
    width: '20px',
    height: '20px',
    extraClasses: '',
  }

  const mergedProps: TodayOutlineProps = { ...defaultProps, ...rest }

  return (
    <>
      <svg
        className={`[&>*]:stroke-current fill-current  ${extraClasses}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        {...mergedProps}
      >
        <rect
          fill="none"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="32"
          x="48"
          y="80"
          width="416"
          height="384"
          rx="48"
        />
        <line
          fill="none"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="32"
          strokeLinecap="round"
          x1="128"
          y1="48"
          x2="128"
          y2="80"
        />
        <line
          fill="none"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="32"
          strokeLinecap="round"
          x1="384"
          y1="48"
          x2="384"
          y2="80"
        />
        <rect
          fill="none"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="32"
          strokeLinecap="round"
          x="112"
          y="224"
          width="96"
          height="96"
          rx="13"
        />
        <line
          fill="none"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="32"
          strokeLinecap="round"
          x1="464"
          y1="160"
          x2="48"
          y2="160"
        />
      </svg>
    </>
  )
}
