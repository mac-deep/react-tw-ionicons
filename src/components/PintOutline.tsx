import { SVGProps, SVGAttributes } from 'react'

type PintOutlineProps = {
  extraStyles?: SVGAttributes<SVGElement>['style']
  extraClasses?: SVGAttributes<SVGElement>['className']
} & Omit<SVGProps<SVGSVGElement>, 'style' | 'className'>

export default function PintOutline({ extraStyles, extraClasses, ...rest }: PintOutlineProps) {
  const defaultProps: PintOutlineProps = {
    width: '20px',
    height: '20px',
    extraClasses: '',
  }

  const mergedProps: PintOutlineProps = { ...defaultProps, ...rest }

  return (
    <>
      <svg
        className={`[&>*]:stroke-current fill-current  ${extraClasses}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        {...mergedProps}
      >
        <path
          d="M132.43,162c-6.24-34-4.49-45.55-3.07-68.39L132.27,47a16,16,0,0,1,15.94-15H363.78a16,16,0,0,1,15.94,15l2.91,46.61c1.43,22.86,3.19,34.39-3.06,68.45-5.93,32.29-43.71,133.27-43.71,238.32V472a8,8,0,0,1-8,8H184.12a8,8,0,0,1-8-8V400.37C176.13,307.9,138.66,196.07,132.43,162Z"
          style={{
            fill: 'none',
            stroke: 'currentColor',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '32px',
          }}
        />
        <line
          x1="135.21"
          y1="96"
          x2="376.79"
          y2="96"
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
