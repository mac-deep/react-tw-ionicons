import { SVGProps, SVGAttributes } from 'react'

type GitCompareSharpProps = {
  extraStyles?: SVGAttributes<SVGElement>['style']
  extraClasses?: SVGAttributes<SVGElement>['className']
} & Omit<SVGProps<SVGSVGElement>, 'style' | 'className'>

export default function GitCompareSharp({ extraStyles, extraClasses, ...rest }: GitCompareSharpProps) {
  const defaultProps: GitCompareSharpProps = {
    width: '20px',
    height: '20px',
    extraClasses: '',
  }

  const mergedProps: GitCompareSharpProps = { ...defaultProps, ...rest }

  return (
    <>
      <svg
        className={`[&>*]:stroke-current fill-current  ${extraClasses}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        {...mergedProps}
      >
        <path d="M209,384H172a28,28,0,0,1-28-28V152a64,64,0,1,0-64-1.16V356a92.1,92.1,0,0,0,92,92h37v55.21L294.39,416,209,328.79ZM113,64A32,32,0,1,1,81,96,32,32,0,0,1,113,64Z" />
        <path d="M432,360.61V156a92.1,92.1,0,0,0-92-92H305V9.93L217.14,96,305,182.07V128h35a28,28,0,0,1,28,28V360.61a64,64,0,1,0,64,0ZM400,448a32,32,0,1,1,32-32A32,32,0,0,1,400,448Z" />
      </svg>
    </>
  )
}
