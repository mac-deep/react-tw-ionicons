import { SVGProps, SVGAttributes } from 'react'

type CodeWorkingProps = {
  extraStyles?: SVGAttributes<SVGElement>['style']
  extraClasses?: SVGAttributes<SVGElement>['className']
} & Omit<SVGProps<SVGSVGElement>, 'style' | 'className'>

export default function CodeWorking({ extraStyles, extraClasses, ...rest }: CodeWorkingProps) {
  const defaultProps: CodeWorkingProps = {
    width: '20px',
    height: '20px',
    extraClasses: '',
  }

  const mergedProps: CodeWorkingProps = { ...defaultProps, ...rest }

  return (
    <>
      <svg
        className={`[&>*]:stroke-current fill-current  ${extraClasses}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        {...mergedProps}
      >
        <circle
          cx="256"
          cy="256"
          r="26"
          style={{ stroke: 'currentColor', strokeMiterlimit: '10', strokeWidth: '10px' }}
        />
        <circle
          cx="346"
          cy="256"
          r="26"
          style={{ stroke: 'currentColor', strokeMiterlimit: '10', strokeWidth: '10px' }}
        />
        <circle
          cx="166"
          cy="256"
          r="26"
          style={{ stroke: 'currentColor', strokeMiterlimit: '10', strokeWidth: '10px' }}
        />
        <polyline
          points="160 368 32 256 160 144"
          style={{
            fill: 'none',
            stroke: 'currentColor',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '42px',
          }}
        />
        <polyline
          points="352 368 480 256 352 144"
          style={{
            fill: 'none',
            stroke: 'currentColor',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '42px',
          }}
        />
      </svg>
    </>
  )
}
