import { SVGProps, SVGAttributes } from 'react'

type BookmarkSharpProps = {
  extraStyles?: SVGAttributes<SVGElement>['style']
  extraClasses?: SVGAttributes<SVGElement>['className']
} & Omit<SVGProps<SVGSVGElement>, 'style' | 'className'>

export default function BookmarkSharp({ extraStyles, extraClasses, ...rest }: BookmarkSharpProps) {
  const defaultProps: BookmarkSharpProps = {
    width: '20px',
    height: '20px',
    extraClasses: '',
  }

  const mergedProps: BookmarkSharpProps = { ...defaultProps, ...rest }

  return (
    <>
      <svg
        className={`[&>*]:stroke-current fill-current  ${extraClasses}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        {...mergedProps}
      >
        <path d="M416,480,256,357.41,96,480V32H416Z" />
      </svg>
    </>
  )
}
