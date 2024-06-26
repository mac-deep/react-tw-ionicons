import { SVGProps, SVGAttributes } from 'react'

type PlanetOutlineProps = {
  extraStyles?: SVGAttributes<SVGElement>['style']
  extraClasses?: SVGAttributes<SVGElement>['className']
} & Omit<SVGProps<SVGSVGElement>, 'style' | 'className'>

export default function PlanetOutline({ extraStyles, extraClasses, ...rest }: PlanetOutlineProps) {
  const defaultProps: PlanetOutlineProps = {
    width: '20px',
    height: '20px',
    extraClasses: '',
  }

  const mergedProps: PlanetOutlineProps = { ...defaultProps, ...rest }

  return (
    <>
      <svg
        className={`[&>*]:stroke-current fill-current  ${extraClasses}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        {...mergedProps}
      >
        <path
          d="M413.48,284.46c58.87,47.24,91.61,89,80.31,108.55-17.85,30.85-138.78-5.48-270.1-81.15S.37,149.84,18.21,119c11.16-19.28,62.58-12.32,131.64,14.09"
          style={{ fill: 'none', stroke: 'currentColor', strokeMiterlimit: '10', strokeWidth: '32px' }}
        />
        <circle
          cx="256"
          cy="256"
          r="160"
          style={{ fill: 'none', stroke: 'currentColor', strokeMiterlimit: '10', strokeWidth: '32px' }}
        />
      </svg>
    </>
  )
}
