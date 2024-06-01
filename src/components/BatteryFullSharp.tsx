import { SVGProps, SVGAttributes } from 'react'

type BatteryFullSharpProps = {
  extraStyles?: SVGAttributes<SVGElement>['style']
  extraClasses?: SVGAttributes<SVGElement>['className']
} & Omit<SVGProps<SVGSVGElement>, 'style' | 'className'>

export default function BatteryFullSharp({ extraStyles, extraClasses, ...rest }: BatteryFullSharpProps) {
  const defaultProps: BatteryFullSharpProps = {
    width: '20px',
    height: '20px',
    extraClasses: '',
  }

  const mergedProps: BatteryFullSharpProps = { ...defaultProps, ...rest }

  return (
    <>
      <svg
        className={`[&>*]:stroke-current fill-current  ${extraClasses}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        {...mergedProps}
      >
        <path d="M17,384H449V128H17ZM49,160H417V352H49Z" />
        <rect x="70.69" y="182.94" width="324.63" height="146.13" />
        <rect x="465" y="202.67" width="32" height="106.67" />
      </svg>
    </>
  )
}
