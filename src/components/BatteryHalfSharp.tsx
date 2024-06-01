import { SVGProps, SVGAttributes } from 'react'

type BatteryHalfSharpProps = {
  extraStyles?: SVGAttributes<SVGElement>['style']
  extraClasses?: SVGAttributes<SVGElement>['className']
} & Omit<SVGProps<SVGSVGElement>, 'style' | 'className'>

export default function BatteryHalfSharp({ extraStyles, extraClasses, ...rest }: BatteryHalfSharpProps) {
  const defaultProps: BatteryHalfSharpProps = {
    width: '20px',
    height: '20px',
    extraClasses: '',
  }

  const mergedProps: BatteryHalfSharpProps = { ...defaultProps, ...rest }

  return (
    <>
      <svg
        className={`[&>*]:stroke-current fill-current  ${extraClasses}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        {...mergedProps}
      >
        <path d="M17,384H449V128H17ZM49,160H417V352H49Z" />
        <rect x="70.69" y="182.92" width="185.31" height="146.16" />
        <rect x="465" y="202.67" width="32" height="106.67" />
      </svg>
    </>
  )
}
