import { SVGProps, SVGAttributes } from 'react'

type ShapesSharpProps = {
  extraStyles?: SVGAttributes<SVGElement>['style']
  extraClasses?: SVGAttributes<SVGElement>['className']
} & Omit<SVGProps<SVGSVGElement>, 'style' | 'className'>

export default function ShapesSharp({ extraStyles, extraClasses, ...rest }: ShapesSharpProps) {
  const defaultProps: ShapesSharpProps = {
    width: '20px',
    height: '20px',
    extraClasses: '',
  }

  const mergedProps: ShapesSharpProps = { ...defaultProps, ...rest }

  return (
    <>
      <svg
        className={`[&>*]:stroke-current fill-current  ${extraClasses}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        {...mergedProps}
      >
        <path d="M363.27,336H4.73L184,16Z" />
        <path d="M336,160a160.54,160.54,0,0,0-32.55,3.36l87.75,157L417.81,368H183.36C203.8,432.85,264.49,480,336,480c88.22,0,160-71.78,160-160S424.22,160,336,160Z" />
      </svg>
    </>
  )
}
