import { SVGProps, SVGAttributes } from 'react'

type LogoStackoverflowProps = {
  extraStyles?: SVGAttributes<SVGElement>['style']
  extraClasses?: SVGAttributes<SVGElement>['className']
} & Omit<SVGProps<SVGSVGElement>, 'style' | 'className'>

export default function LogoStackoverflow({ extraStyles, extraClasses, ...rest }: LogoStackoverflowProps) {
  const defaultProps: LogoStackoverflowProps = {
    width: '20px',
    height: '20px',
    extraClasses: '',
  }

  const mergedProps: LogoStackoverflowProps = { ...defaultProps, ...rest }

  return (
    <>
      <svg
        className={`[&>*]:stroke-current fill-current  ${extraClasses}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        {...mergedProps}
      >
        <path d="M392,440V320h40V480H64V320h40V440Z" />
        <path d="M149.1,308.77l198.57,40.87,8.4-39.32L157.5,269.45Zm26.27-93.12L359.22,300,376,263.76,192.18,178.92Zm50.95-89,156,127.78,25.74-30.52-156-127.78ZM328,32,294.61,55.8,415.43,216.17,448,192ZM144,400H348V360H144Z" />
      </svg>
    </>
  )
}
