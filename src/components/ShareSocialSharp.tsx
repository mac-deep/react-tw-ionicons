import { SVGProps, SVGAttributes } from 'react'

type ShareSocialSharpProps = {
  extraStyles?: SVGAttributes<SVGElement>['style']
  extraClasses?: SVGAttributes<SVGElement>['className']
} & Omit<SVGProps<SVGSVGElement>, 'style' | 'className'>

export default function ShareSocialSharp({ extraStyles, extraClasses, ...rest }: ShareSocialSharpProps) {
  const defaultProps: ShareSocialSharpProps = {
    width: '20px',
    height: '20px',
    extraClasses: '',
  }

  const mergedProps: ShareSocialSharpProps = { ...defaultProps, ...rest }

  return (
    <>
      <svg
        className={`[&>*]:stroke-current fill-current  ${extraClasses}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        {...mergedProps}
      >
        <path d="M378,324a69.78,69.78,0,0,0-48.83,19.91L202,272.41a69.68,69.68,0,0,0,0-32.82l127.13-71.5A69.76,69.76,0,1,0,308.87,129l-130.13,73.2a70,70,0,1,0,0,107.56L308.87,383A70,70,0,1,0,378,324Z" />
      </svg>
    </>
  )
}
