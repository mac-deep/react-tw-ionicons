import { SVGProps, SVGAttributes } from 'react'

type ChevronDownCircleSharpProps = {
  extraStyles?: SVGAttributes<SVGElement>['style']
  extraClasses?: SVGAttributes<SVGElement>['className']
} & Omit<SVGProps<SVGSVGElement>, 'style' | 'className'>

export default function ChevronDownCircleSharp({ extraStyles, extraClasses, ...rest }: ChevronDownCircleSharpProps) {
  const defaultProps: ChevronDownCircleSharpProps = {
    width: '20px',
    height: '20px',
    extraClasses: '',
  }

  const mergedProps: ChevronDownCircleSharpProps = { ...defaultProps, ...rest }

  return (
    <>
      <svg
        className={`[&>*]:stroke-current fill-current  ${extraClasses}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        {...mergedProps}
      >
        <path d="M256,464c114.87,0,208-93.13,208-208S370.87,48,256,48,48,141.13,48,256,141.13,464,256,464ZM160,193.37l96,96,96-96L374.63,216,256,334.63,137.37,216Z" />
      </svg>
    </>
  )
}
