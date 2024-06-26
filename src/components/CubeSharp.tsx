import { SVGProps, SVGAttributes } from 'react'

type CubeSharpProps = {
  extraStyles?: SVGAttributes<SVGElement>['style']
  extraClasses?: SVGAttributes<SVGElement>['className']
} & Omit<SVGProps<SVGSVGElement>, 'style' | 'className'>

export default function CubeSharp({ extraStyles, extraClasses, ...rest }: CubeSharpProps) {
  const defaultProps: CubeSharpProps = {
    width: '20px',
    height: '20px',
    extraClasses: '',
  }

  const mergedProps: CubeSharpProps = { ...defaultProps, ...rest }

  return (
    <>
      <svg
        className={`[&>*]:stroke-current fill-current  ${extraClasses}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        {...mergedProps}
      >
        <polygon points="48 170 48 366.92 240 480 240 284 48 170" />
        <path d="M272,480,464,366.92V170L272,284ZM448,357.64h0Z" />
        <polygon points="448 144 256 32 64 144 256 256 448 144" />
      </svg>
    </>
  )
}
