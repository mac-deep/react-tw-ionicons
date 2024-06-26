import { SVGProps, SVGAttributes } from 'react'

type TimerOutlineProps = {
  extraStyles?: SVGAttributes<SVGElement>['style']
  extraClasses?: SVGAttributes<SVGElement>['className']
} & Omit<SVGProps<SVGSVGElement>, 'style' | 'className'>

export default function TimerOutline({ extraStyles, extraClasses, ...rest }: TimerOutlineProps) {
  const defaultProps: TimerOutlineProps = {
    width: '20px',
    height: '20px',
    extraClasses: '',
  }

  const mergedProps: TimerOutlineProps = { ...defaultProps, ...rest }

  return (
    <>
      <svg
        className={`[&>*]:stroke-current fill-current  ${extraClasses}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        {...mergedProps}
      >
        <path
          d="M112.91,128A191.85,191.85,0,0,0,64,254c-1.18,106.35,85.65,193.8,192,194,106.2.2,192-85.83,192-192,0-104.54-83.55-189.61-187.5-192A4.36,4.36,0,0,0,256,68.37V152"
          style={{
            fill: 'none',
            stroke: 'currentColor',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '32px',
          }}
        />
        <path d="M233.38,278.63l-79-113a8.13,8.13,0,0,1,11.32-11.32l113,79a32.5,32.5,0,0,1-37.25,53.26A33.21,33.21,0,0,1,233.38,278.63Z" />
      </svg>
    </>
  )
}
