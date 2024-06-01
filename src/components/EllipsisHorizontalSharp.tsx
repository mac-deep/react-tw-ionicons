import { SVGProps, SVGAttributes } from 'react'

type EllipsisHorizontalSharpProps = {
  extraStyles?: SVGAttributes<SVGElement>['style']
  extraClasses?: SVGAttributes<SVGElement>['className']
} & Omit<SVGProps<SVGSVGElement>, 'style' | 'className'>

export default function EllipsisHorizontalSharp({ extraStyles, extraClasses, ...rest }: EllipsisHorizontalSharpProps) {
  const defaultProps: EllipsisHorizontalSharpProps = {
    width: '20px',
    height: '20px',
    extraClasses: '',
  }

  const mergedProps: EllipsisHorizontalSharpProps = { ...defaultProps, ...rest }

  return (
    <>
      <svg
        className={`[&>*]:stroke-current fill-current  ${extraClasses}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        {...mergedProps}
      >
        <circle cx="256" cy="256" r="48" />
        <circle cx="416" cy="256" r="48" />
        <circle cx="96" cy="256" r="48" />
      </svg>
    </>
  )
}
