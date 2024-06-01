import { SVGProps, SVGAttributes } from 'react'

type StopProps = {
  extraStyles?: SVGAttributes<SVGElement>['style']
  extraClasses?: SVGAttributes<SVGElement>['className']
} & Omit<SVGProps<SVGSVGElement>, 'style' | 'className'>

export default function Stop({ extraStyles, extraClasses, ...rest }: StopProps) {
  const defaultProps: StopProps = {
    width: '20px',
    height: '20px',
    extraClasses: '',
  }

  const mergedProps: StopProps = { ...defaultProps, ...rest }

  return (
    <>
      <svg
        className={`[&>*]:stroke-current fill-current  ${extraClasses}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        {...mergedProps}
      >
        <path d="M392,432H120a40,40,0,0,1-40-40V120a40,40,0,0,1,40-40H392a40,40,0,0,1,40,40V392A40,40,0,0,1,392,432Z" />
      </svg>
    </>
  )
}
