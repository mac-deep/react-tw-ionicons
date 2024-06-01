import { SVGProps, SVGAttributes } from 'react'

type LogoMicrosoftProps = {
  extraStyles?: SVGAttributes<SVGElement>['style']
  extraClasses?: SVGAttributes<SVGElement>['className']
} & Omit<SVGProps<SVGSVGElement>, 'style' | 'className'>

export default function LogoMicrosoft({ extraStyles, extraClasses, ...rest }: LogoMicrosoftProps) {
  const defaultProps: LogoMicrosoftProps = {
    width: '20px',
    height: '20px',
    extraClasses: '',
  }

  const mergedProps: LogoMicrosoftProps = { ...defaultProps, ...rest }

  return (
    <>
      <svg
        className={`[&>*]:stroke-current fill-current  ${extraClasses}`}
        id="icons"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        {...mergedProps}
      >
        <path d="M31.87,30.58H244.7V243.39H31.87Z" />
        <path d="M266.89,30.58H479.7V243.39H266.89Z" />
        <path d="M31.87,265.61H244.7v212.8H31.87Z" />
        <path d="M266.89,265.61H479.7v212.8H266.89Z" />
      </svg>
    </>
  )
}
