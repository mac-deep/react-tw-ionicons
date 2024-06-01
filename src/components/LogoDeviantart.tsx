import { SVGProps, SVGAttributes } from 'react'

type LogoDeviantartProps = {
  extraStyles?: SVGAttributes<SVGElement>['style']
  extraClasses?: SVGAttributes<SVGElement>['className']
} & Omit<SVGProps<SVGSVGElement>, 'style' | 'className'>

export default function LogoDeviantart({ extraStyles, extraClasses, ...rest }: LogoDeviantartProps) {
  const defaultProps: LogoDeviantartProps = {
    width: '20px',
    height: '20px',
    extraClasses: '',
  }

  const mergedProps: LogoDeviantartProps = { ...defaultProps, ...rest }

  return (
    <>
      <svg
        className={`[&>*]:stroke-current fill-current  ${extraClasses}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        {...mergedProps}
      >
        <polygon points="408 103.28 408 16 407.97 16 318.69 16 309.79 24.78 267.64 103.26 254.39 112 104 112 104 231.85 186.68 231.85 194.04 240.56 104 408.72 104 496 104.02 496 193.3 496 202.21 487.21 244.35 408.73 257.61 400 408 400 408 280.13 325.32 280.13 317.96 271.38 408 103.28" />
      </svg>
    </>
  )
}
