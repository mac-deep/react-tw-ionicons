import { SVGProps, SVGAttributes } from 'react'

type EarOutlineProps = {
  extraStyles?: SVGAttributes<SVGElement>['style']
  extraClasses?: SVGAttributes<SVGElement>['className']
} & Omit<SVGProps<SVGSVGElement>, 'style' | 'className'>

export default function EarOutline({ extraStyles, extraClasses, ...rest }: EarOutlineProps) {
  const defaultProps: EarOutlineProps = {
    width: '20px',
    height: '20px',
    extraClasses: '',
  }

  const mergedProps: EarOutlineProps = { ...defaultProps, ...rest }

  return (
    <>
      <svg
        className={`[&>*]:stroke-current fill-current  ${extraClasses}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        {...mergedProps}
      >
        <path
          d="M335.72,330.76C381.73,299.5,416,251.34,416,192a160,160,0,0,0-320,0V398.57C96,442.83,131.74,480,176,480h0c44.26,0,66.83-25.94,77.29-40C268.06,420.19,295,358.44,335.72,330.76Z"
          style={{
            fill: 'none',
            stroke: 'currentColor',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '32px',
          }}
        />
        <path
          d="M160,304V184c0-48.4,43.2-88,96-88h0c52.8,0,96,39.6,96,88"
          style={{
            fill: 'none',
            stroke: 'currentColor',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '32px',
          }}
        />
        <path
          d="M160,239c25-18,79.82-15,79.82-15,26,0,41.17,29.42,26,50.6,0,0-36.86,42.4-41.86,61.4"
          style={{
            fill: 'none',
            stroke: 'currentColor',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '32px',
          }}
        />
      </svg>
    </>
  )
}
