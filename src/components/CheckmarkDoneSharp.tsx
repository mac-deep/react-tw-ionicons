import { SVGProps, SVGAttributes } from 'react'

type CheckmarkDoneSharpProps = {
  extraStyles?: SVGAttributes<SVGElement>['style']
  extraClasses?: SVGAttributes<SVGElement>['className']
} & Omit<SVGProps<SVGSVGElement>, 'style' | 'className'>

export default function CheckmarkDoneSharp({ extraStyles, extraClasses, ...rest }: CheckmarkDoneSharpProps) {
  const defaultProps: CheckmarkDoneSharpProps = {
    width: '20px',
    height: '20px',
    extraClasses: '',
  }

  const mergedProps: CheckmarkDoneSharpProps = { ...defaultProps, ...rest }

  return (
    <>
      <svg
        className={`[&>*]:stroke-current fill-current  ${extraClasses}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        {...mergedProps}
      >
        <polyline
          points="465 127 241 384 149 292"
          style={{
            fill: 'none',
            stroke: 'currentColor',
            strokeLinecap: 'square',
            strokeMiterlimit: '10',
            strokeWidth: '44px',
          }}
        />
        <line
          x1="140"
          y1="385"
          x2="47"
          y2="292"
          style={{
            fill: 'none',
            stroke: 'currentColor',
            strokeLinecap: 'square',
            strokeMiterlimit: '10',
            strokeWidth: '44px',
          }}
        />
        <line
          x1="363"
          y1="127"
          x2="236"
          y2="273"
          style={{
            fill: 'none',
            stroke: 'currentColor',
            strokeLinecap: 'square',
            strokeMiterlimit: '10',
            strokeWidth: '44px',
          }}
        />
      </svg>
    </>
  )
}
