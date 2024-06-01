import { SVGProps, SVGAttributes } from 'react'

type DiceSharpProps = {
  extraStyles?: SVGAttributes<SVGElement>['style']
  extraClasses?: SVGAttributes<SVGElement>['className']
} & Omit<SVGProps<SVGSVGElement>, 'style' | 'className'>

export default function DiceSharp({ extraStyles, extraClasses, ...rest }: DiceSharpProps) {
  const defaultProps: DiceSharpProps = {
    width: '20px',
    height: '20px',
    extraClasses: '',
  }

  const mergedProps: DiceSharpProps = { ...defaultProps, ...rest }

  return (
    <>
      <svg
        className={`[&>*]:stroke-current fill-current  ${extraClasses}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        {...mergedProps}
      >
        <path d="M48,366.92,240,480V284L48,170ZM192,288c8.84,0,16,10.75,16,24s-7.16,24-16,24-16-10.75-16-24S183.16,288,192,288ZM96,320c8.84,0,16,10.75,16,24s-7.16,24-16,24-16-10.75-16-24S87.16,320,96,320Z" />
        <path d="M272,284V480L464,366.92V170Zm48,140c-8.84,0-16-10.75-16-24s7.16-24,16-24,16,10.75,16,24S328.84,424,320,424Zm0-88c-8.84,0-16-10.75-16-24s7.16-24,16-24,16,10.75,16,24S328.84,336,320,336Zm96,32c-8.84,0-16-10.75-16-24s7.16-24,16-24,16,10.75,16,24S424.84,368,416,368Zm0-88c-8.84,0-16-10.75-16-24s7.16-24,16-24,16,10.75,16,24S424.84,280,416,280Zm32,77.64h0Z" />
        <path d="M256,32,64,144,256,256,448,144Zm0,120c-13.25,0-24-7.16-24-16s10.75-16,24-16,24,7.16,24,16S269.25,152,256,152Z" />
      </svg>
    </>
  )
}
