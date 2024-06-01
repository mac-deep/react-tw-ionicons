import { SVGProps, SVGAttributes } from 'react'

type EllipsisVerticalCircleProps = {
  extraStyles?: SVGAttributes<SVGElement>['style']
  extraClasses?: SVGAttributes<SVGElement>['className']
} & Omit<SVGProps<SVGSVGElement>, 'style' | 'className'>

export default function EllipsisVerticalCircle({ extraStyles, extraClasses, ...rest }: EllipsisVerticalCircleProps) {
  const defaultProps: EllipsisVerticalCircleProps = {
    width: '20px',
    height: '20px',
    extraClasses: '',
  }

  const mergedProps: EllipsisVerticalCircleProps = { ...defaultProps, ...rest }

  return (
    <>
      <svg
        className={`[&>*]:stroke-current fill-current  ${extraClasses}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        {...mergedProps}
      >
        <circle cx="256" cy="256" r="26" />
        <circle cx="256" cy="346" r="26" />
        <circle cx="256" cy="166" r="26" />
        <path
          d="M448,256c0-106-86-192-192-192S64,150,64,256s86,192,192,192S448,362,448,256Z"
          style={{ fill: 'none', stroke: 'currentColor', strokeMiterlimit: '10', strokeWidth: '32px' }}
        />
      </svg>
    </>
  )
}
