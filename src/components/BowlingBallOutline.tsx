import { SVGProps, SVGAttributes } from 'react'

type BowlingBallOutlineProps = {
  extraStyles?: SVGAttributes<SVGElement>['style']
  extraClasses?: SVGAttributes<SVGElement>['className']
} & Omit<SVGProps<SVGSVGElement>, 'style' | 'className'>

export default function BowlingBallOutline({ extraStyles, extraClasses, ...rest }: BowlingBallOutlineProps) {
  const defaultProps: BowlingBallOutlineProps = {
    width: '20px',
    height: '20px',
    extraClasses: '',
  }

  const mergedProps: BowlingBallOutlineProps = { ...defaultProps, ...rest }

  return (
    <>
      <svg
        className={`[&>*]:stroke-current fill-current  ${extraClasses}`}
        id="icons"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        {...mergedProps}
      >
        <circle cx="256" cy="256" r="208" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32" />
        <circle cx="288" cy="200" r="24" />
        <circle cx="296" cy="128" r="24" />
        <circle cx="360" cy="168" r="24" />
      </svg>
    </>
  )
}
