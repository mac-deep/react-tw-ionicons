import { SVGProps, SVGAttributes } from 'react'

type CaretUpSharpProps = {
  extraStyles?: SVGAttributes<SVGElement>['style']
  extraClasses?: SVGAttributes<SVGElement>['className']
} & Omit<SVGProps<SVGSVGElement>, 'style' | 'className'>

export default function CaretUpSharp({ extraStyles, extraClasses, ...rest }: CaretUpSharpProps) {
  const defaultProps: CaretUpSharpProps = {
    width: '20px',
    height: '20px',
    extraClasses: '',
  }

  const mergedProps: CaretUpSharpProps = { ...defaultProps, ...rest }

  return (
    <>
      <svg
        className={`[&>*]:stroke-current fill-current  ${extraClasses}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        {...mergedProps}
      >
        <polygon points="448 368 256 144 64 368 448 368" />
      </svg>
    </>
  )
}
