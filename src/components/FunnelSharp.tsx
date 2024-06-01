import { SVGProps, SVGAttributes } from 'react'

type FunnelSharpProps = {
  extraStyles?: SVGAttributes<SVGElement>['style']
  extraClasses?: SVGAttributes<SVGElement>['className']
} & Omit<SVGProps<SVGSVGElement>, 'style' | 'className'>

export default function FunnelSharp({ extraStyles, extraClasses, ...rest }: FunnelSharpProps) {
  const defaultProps: FunnelSharpProps = {
    width: '20px',
    height: '20px',
    extraClasses: '',
  }

  const mergedProps: FunnelSharpProps = { ...defaultProps, ...rest }

  return (
    <>
      <svg
        className={`[&>*]:stroke-current fill-current  ${extraClasses}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        {...mergedProps}
      >
        <polygon points="0 48 192 288 192 416 320 464 320 288 512 48 0 48" />
      </svg>
    </>
  )
}
