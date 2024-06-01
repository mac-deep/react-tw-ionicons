import { SVGProps, SVGAttributes } from 'react'

type UnlinkProps = {
  extraStyles?: SVGAttributes<SVGElement>['style']
  extraClasses?: SVGAttributes<SVGElement>['className']
} & Omit<SVGProps<SVGSVGElement>, 'style' | 'className'>

export default function Unlink({ extraStyles, extraClasses, ...rest }: UnlinkProps) {
  const defaultProps: UnlinkProps = {
    width: '20px',
    height: '20px',
    extraClasses: '',
  }

  const mergedProps: UnlinkProps = { ...defaultProps, ...rest }

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
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="48"
        />
        <path
          d="M312.59,160H368a96,96,0,0,1,0,192H311.34"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="48"
        />
      </svg>
    </>
  )
}
