import { SVGProps, SVGAttributes } from 'react'

type FilterCircleOutlineProps = {
  extraStyles?: SVGAttributes<SVGElement>['style']
  extraClasses?: SVGAttributes<SVGElement>['className']
} & Omit<SVGProps<SVGSVGElement>, 'style' | 'className'>

export default function FilterCircleOutline({ extraStyles, extraClasses, ...rest }: FilterCircleOutlineProps) {
  const defaultProps: FilterCircleOutlineProps = {
    width: '20px',
    height: '20px',
    extraClasses: '',
  }

  const mergedProps: FilterCircleOutlineProps = { ...defaultProps, ...rest }

  return (
    <>
      <svg
        className={`[&>*]:stroke-current fill-current  ${extraClasses}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        {...mergedProps}
      >
        <path
          fill="none"
          stroke="currentColor"
          strokeWidth="32"
          strokeMiterlimit="10"
          d="M448,256c0-106-86-192-192-192S64,150,64,256s86,192,192,192S448,362,448,256Z"
        />
        <line
          fill="none"
          stroke="currentColor"
          strokeWidth="32"
          strokeLinecap="round"
          strokeLinejoin="round"
          x1="144"
          y1="208"
          x2="368"
          y2="208"
        />
        <line
          fill="none"
          stroke="currentColor"
          strokeWidth="32"
          strokeLinecap="round"
          strokeLinejoin="round"
          x1="176"
          y1="272"
          x2="336"
          y2="272"
        />
        <line
          fill="none"
          stroke="currentColor"
          strokeWidth="32"
          strokeLinecap="round"
          strokeLinejoin="round"
          x1="224"
          y1="336"
          x2="288"
          y2="336"
        />
      </svg>
    </>
  )
}
