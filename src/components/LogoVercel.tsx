import { SVGProps, SVGAttributes } from 'react'

type LogoVercelProps = {
  extraStyles?: SVGAttributes<SVGElement>['style']
  extraClasses?: SVGAttributes<SVGElement>['className']
} & Omit<SVGProps<SVGSVGElement>, 'style' | 'className'>

export default function LogoVercel({ extraStyles, extraClasses, ...rest }: LogoVercelProps) {
  const defaultProps: LogoVercelProps = {
    width: '20px',
    height: '20px',
    extraClasses: '',
  }

  const mergedProps: LogoVercelProps = { ...defaultProps, ...rest }

  return (
    <>
      <svg
        className={`[&>*]:stroke-current fill-current  ${extraClasses}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        {...mergedProps}
      >
        <path fillRule="evenodd" d="M256,48,496,464H16Z" />
      </svg>
    </>
  )
}
