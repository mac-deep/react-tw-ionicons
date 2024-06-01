import { SVGProps, SVGAttributes } from 'react'

type WalkSharpProps = {
  extraStyles?: SVGAttributes<SVGElement>['style']
  extraClasses?: SVGAttributes<SVGElement>['className']
} & Omit<SVGProps<SVGSVGElement>, 'style' | 'className'>

export default function WalkSharp({ extraStyles, extraClasses, ...rest }: WalkSharpProps) {
  const defaultProps: WalkSharpProps = {
    width: '20px',
    height: '20px',
    extraClasses: '',
  }

  const mergedProps: WalkSharpProps = { ...defaultProps, ...rest }

  return (
    <>
      <svg
        className={`[&>*]:stroke-current fill-current  ${extraClasses}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        {...mergedProps}
      >
        <path
          d="M315.09,481.38,258.14,366.26l-45-57.56a73.11,73.11,0,0,1-10.16-37.17V142h15.73A40.36,40.36,0,0,1,259,182.32V344.84"
          style={{ stroke: 'currentColor', strokeLinecap: 'square', strokeLinejoin: 'round', strokeWidth: '32px' }}
        />
        <polyline
          points="128.18 291.5 128.18 216.73 193.13 151.63"
          style={{
            fill: 'none',
            stroke: 'currentColor',
            strokeLinecap: 'square',
            strokeLinejoin: 'round',
            strokeWidth: '32px',
          }}
        />
        <polygon points="376.35 295.73 292.4 239.35 292.4 194.67 397.08 267.62 376.35 295.73" />
        <polygon points="175.13 498.58 153.7 471.67 234.03 390.13 249.56 422.2 175.13 498.58" />
        <circle
          cx="259.02"
          cy="67.21"
          r="37.38"
          style={{ stroke: 'currentColor', strokeLinecap: 'square', strokeLinejoin: 'round', strokeWidth: '16px' }}
        />
      </svg>
    </>
  )
}
