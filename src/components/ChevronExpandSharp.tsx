import { SVGProps, SVGAttributes } from 'react'

type ChevronExpandSharpProps = {
  extraStyles?: SVGAttributes<SVGElement>['style']
  extraClasses?: SVGAttributes<SVGElement>['className']
} & Omit<SVGProps<SVGSVGElement>, 'style' | 'className'>

export default function ChevronExpandSharp({ extraStyles, extraClasses, ...rest }: ChevronExpandSharpProps) {
  const defaultProps: ChevronExpandSharpProps = {
    width: '20px',
    height: '20px',
    extraClasses: '',
  }

  const mergedProps: ChevronExpandSharpProps = { ...defaultProps, ...rest }

  return (
    <>
      <svg
        className={`[&>*]:stroke-current fill-current  ${extraClasses}`}
        viewBox="0 0 512 512"
        xmlns="http://www.w3.org/2000/svg"
        {...mergedProps}
      >
        <path d="M136 208L256 104L376 208" fill="none" stroke="currentColor" strokeWidth="48" strokeLinecap="square" />
        <path d="M136 304L256 408L376 304" fill="none" stroke="currentColor" strokeWidth="48" strokeLinecap="square" />
      </svg>
    </>
  )
}
