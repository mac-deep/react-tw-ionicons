import { SVGProps, SVGAttributes } from 'react'

type InformationSharpProps = {
  extraStyles?: SVGAttributes<SVGElement>['style']
  extraClasses?: SVGAttributes<SVGElement>['className']
} & Omit<SVGProps<SVGSVGElement>, 'style' | 'className'>

export default function InformationSharp({ extraStyles, extraClasses, ...rest }: InformationSharpProps) {
  const defaultProps: InformationSharpProps = {
    width: '20px',
    height: '20px',
    extraClasses: '',
  }

  const mergedProps: InformationSharpProps = { ...defaultProps, ...rest }

  return (
    <>
      <svg
        className={`[&>*]:stroke-current fill-current  ${extraClasses}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        {...mergedProps}
      >
        <polyline
          points="196 220 260 220 260 392"
          style={{
            fill: 'none',
            stroke: 'currentColor',
            strokeLinecap: 'square',
            strokeMiterlimit: '10',
            strokeWidth: '40px',
          }}
        />
        <line
          x1="187"
          y1="396"
          x2="325"
          y2="396"
          style={{
            fill: 'none',
            stroke: 'currentColor',
            strokeLinecap: 'square',
            strokeMiterlimit: '10',
            strokeWidth: '40px',
          }}
        />
        <path d="M256,160a32,32,0,1,1,32-32A32,32,0,0,1,256,160Z" />
      </svg>
    </>
  )
}
