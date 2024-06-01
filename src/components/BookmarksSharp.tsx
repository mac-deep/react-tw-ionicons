import { SVGProps, SVGAttributes } from 'react'

type BookmarksSharpProps = {
  extraStyles?: SVGAttributes<SVGElement>['style']
  extraClasses?: SVGAttributes<SVGElement>['className']
} & Omit<SVGProps<SVGSVGElement>, 'style' | 'className'>

export default function BookmarksSharp({ extraStyles, extraClasses, ...rest }: BookmarksSharpProps) {
  const defaultProps: BookmarksSharpProps = {
    width: '20px',
    height: '20px',
    extraClasses: '',
  }

  const mergedProps: BookmarksSharpProps = { ...defaultProps, ...rest }

  return (
    <>
      <svg
        className={`[&>*]:stroke-current fill-current  ${extraClasses}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        {...mergedProps}
      >
        <polygon points="112 0 112 48 416 48 416 416 464 448 464 0 112 0" />
        <polygon points="48 80 48 512 216 388 384 512 384 80 48 80" />
      </svg>
    </>
  )
}
