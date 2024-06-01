import { SVGProps, SVGAttributes } from 'react'

type LogoStencilProps = {
  extraStyles?: SVGAttributes<SVGElement>['style']
  extraClasses?: SVGAttributes<SVGElement>['className']
} & Omit<SVGProps<SVGSVGElement>, 'style' | 'className'>

export default function LogoStencil({ extraStyles, extraClasses, ...rest }: LogoStencilProps) {
  const defaultProps: LogoStencilProps = {
    width: '20px',
    height: '20px',
    extraClasses: '',
  }

  const mergedProps: LogoStencilProps = { ...defaultProps, ...rest }

  return (
    <>
      <svg
        className={`[&>*]:stroke-current fill-current  ${extraClasses}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        {...mergedProps}
      >
        <path d="M188.8,334.07H386.13L279.47,448H83.2Z" />
        <path d="M512,199H106.61L0,313H405.39Z" />
        <path d="M232.2,64H428.8L322.62,177.93H125.87Z" />
      </svg>
    </>
  )
}
