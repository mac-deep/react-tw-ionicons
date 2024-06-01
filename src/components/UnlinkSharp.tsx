import { SVGProps, SVGAttributes } from 'react'

type UnlinkSharpProps = {
  extraStyles?: SVGAttributes<SVGElement>['style']
  extraClasses?: SVGAttributes<SVGElement>['className']
} & Omit<SVGProps<SVGSVGElement>, 'style' | 'className'>

export default function UnlinkSharp({ extraStyles, extraClasses, ...rest }: UnlinkSharpProps) {
  const defaultProps: UnlinkSharpProps = {
    width: '20px',
    height: '20px',
    extraClasses: '',
  }

  const mergedProps: UnlinkSharpProps = { ...defaultProps, ...rest }

  return (
    <>
      <svg
        className={`[&>*]:stroke-current fill-current  ${extraClasses}`}
        id="icons"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        {...mergedProps}
      >
        <path
          d="M200.66,352H144a96,96,0,0,1,0-192h55.41"
          fill="none"
          stroke="currentColor"
          strokeLinecap="square"
          strokeLinejoin="round"
          strokeWidth="48"
        />
        <path
          d="M312.59,160H368a96,96,0,0,1,0,192H311.34"
          fill="none"
          stroke="currentColor"
          strokeLinecap="square"
          strokeLinejoin="round"
          strokeWidth="48"
        />
      </svg>
    </>
  )
}
