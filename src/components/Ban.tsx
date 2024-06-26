import { SVGProps, SVGAttributes } from 'react'

type BanProps = {
  extraStyles?: SVGAttributes<SVGElement>['style']
  extraClasses?: SVGAttributes<SVGElement>['className']
} & Omit<SVGProps<SVGSVGElement>, 'style' | 'className'>

export default function Ban({ extraStyles, extraClasses, ...rest }: BanProps) {
  const defaultProps: BanProps = {
    width: '20px',
    height: '20px',
    extraClasses: '',
  }

  const mergedProps: BanProps = { ...defaultProps, ...rest }

  return (
    <>
      <svg
        className={`[&>*]:stroke-current fill-current  ${extraClasses}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        {...mergedProps}
      >
        <circle fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="48" cx="256" cy="256" r="200" />
        <line
          stroke="currentColor"
          strokeMiterlimit="10"
          strokeWidth="48"
          x1="114.58"
          y1="114.58"
          x2="397.42"
          y2="397.42"
        />
      </svg>
    </>
  )
}
