import { SVGProps, SVGAttributes } from 'react'

type SchoolSharpProps = {
  extraStyles?: SVGAttributes<SVGElement>['style']
  extraClasses?: SVGAttributes<SVGElement>['className']
} & Omit<SVGProps<SVGSVGElement>, 'style' | 'className'>

export default function SchoolSharp({ extraStyles, extraClasses, ...rest }: SchoolSharpProps) {
  const defaultProps: SchoolSharpProps = {
    width: '20px',
    height: '20px',
    extraClasses: '',
  }

  const mergedProps: SchoolSharpProps = { ...defaultProps, ...rest }

  return (
    <>
      <svg
        className={`[&>*]:stroke-current fill-current  ${extraClasses}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        {...mergedProps}
      >
        <polygon points="256 370.43 96 279 96 377.42 256 466.3 416 377.42 416 279 256 370.43" />
        <polygon points="512.25 192 256 45.57 -0.25 192 256 338.43 464 219.57 464 384 512 384 512 192.14 512.25 192" />
      </svg>
    </>
  )
}
