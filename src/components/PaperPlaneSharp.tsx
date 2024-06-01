import { SVGProps, SVGAttributes } from 'react'

type PaperPlaneSharpProps = {
  extraStyles?: SVGAttributes<SVGElement>['style']
  extraClasses?: SVGAttributes<SVGElement>['className']
} & Omit<SVGProps<SVGSVGElement>, 'style' | 'className'>

export default function PaperPlaneSharp({ extraStyles, extraClasses, ...rest }: PaperPlaneSharpProps) {
  const defaultProps: PaperPlaneSharpProps = {
    width: '20px',
    height: '20px',
    extraClasses: '',
  }

  const mergedProps: PaperPlaneSharpProps = { ...defaultProps, ...rest }

  return (
    <>
      <svg
        className={`[&>*]:stroke-current fill-current  ${extraClasses}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        {...mergedProps}
      >
        <polygon points="496 16 15.88 208 195 289 448 64 223 317 304 496 496 16" />
      </svg>
    </>
  )
}
