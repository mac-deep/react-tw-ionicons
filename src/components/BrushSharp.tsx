import { SVGProps, SVGAttributes } from 'react'

type BrushSharpProps = {
  extraStyles?: SVGAttributes<SVGElement>['style']
  extraClasses?: SVGAttributes<SVGElement>['className']
} & Omit<SVGProps<SVGSVGElement>, 'style' | 'className'>

export default function BrushSharp({ extraStyles, extraClasses, ...rest }: BrushSharpProps) {
  const defaultProps: BrushSharpProps = {
    width: '20px',
    height: '20px',
    extraClasses: '',
  }

  const mergedProps: BrushSharpProps = { ...defaultProps, ...rest }

  return (
    <>
      <svg
        className={`[&>*]:stroke-current fill-current  ${extraClasses}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        {...mergedProps}
      >
        <path d="M480,96,416,32,172,292l64,64Z" />
        <path d="M142,320c-36.52,0-66,30.63-66,68.57,0,25.43-31,45.72-44,45.72C52.24,462.17,86.78,480,120,480c48.62,0,88-40.91,88-91.43C208,350.63,178.52,320,142,320Z" />
      </svg>
    </>
  )
}
