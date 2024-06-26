import { SVGProps, SVGAttributes } from 'react'

type PricetagsSharpProps = {
  extraStyles?: SVGAttributes<SVGElement>['style']
  extraClasses?: SVGAttributes<SVGElement>['className']
} & Omit<SVGProps<SVGSVGElement>, 'style' | 'className'>

export default function PricetagsSharp({ extraStyles, extraClasses, ...rest }: PricetagsSharpProps) {
  const defaultProps: PricetagsSharpProps = {
    width: '20px',
    height: '20px',
    extraClasses: '',
  }

  const mergedProps: PricetagsSharpProps = { ...defaultProps, ...rest }

  return (
    <>
      <svg
        className={`[&>*]:stroke-current fill-current  ${extraClasses}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        {...mergedProps}
      >
        <path d="M288,16,0,304,176,480,464,192V16Zm80,128a32,32,0,1,1,32-32A32,32,0,0,1,368,144Z" />
        <polygon points="480 64 480 208 216.9 471.1 242 496 512 224 512 64 480 64" />
      </svg>
    </>
  )
}
