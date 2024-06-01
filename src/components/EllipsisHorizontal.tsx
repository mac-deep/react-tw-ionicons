import { SVGProps, SVGAttributes } from 'react'

type EllipsisHorizontalProps = {
  extraStyles?: SVGAttributes<SVGElement>['style']
  extraClasses?: SVGAttributes<SVGElement>['className']
} & Omit<SVGProps<SVGSVGElement>, 'style' | 'className'>

export default function EllipsisHorizontal({ extraStyles, extraClasses, ...rest }: EllipsisHorizontalProps) {
  const defaultProps: EllipsisHorizontalProps = {
    width: '20px',
    height: '20px',
    extraClasses: '',
  }

  const mergedProps: EllipsisHorizontalProps = { ...defaultProps, ...rest }

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
