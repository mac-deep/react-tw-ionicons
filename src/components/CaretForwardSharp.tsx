import { SVGProps, SVGAttributes } from 'react'

type CaretForwardSharpProps = {
  extraStyles?: SVGAttributes<SVGElement>['style']
  extraClasses?: SVGAttributes<SVGElement>['className']
} & Omit<SVGProps<SVGSVGElement>, 'style' | 'className'>

export default function CaretForwardSharp({ extraStyles, extraClasses, ...rest }: CaretForwardSharpProps) {
  const defaultProps: CaretForwardSharpProps = {
    width: '20px',
    height: '20px',
    extraClasses: '',
  }

  const mergedProps: CaretForwardSharpProps = { ...defaultProps, ...rest }

  return (
    <>
      <svg
        className={`[&>*]:stroke-current fill-current  ${extraClasses}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        {...mergedProps}
      >
        <polygon points="144 448 368 256 144 64 144 448" />
      </svg>
    </>
  )
}
