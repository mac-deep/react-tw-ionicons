import { SVGProps, SVGAttributes } from 'react'

type BagSharpProps = {
  extraStyles?: SVGAttributes<SVGElement>['style']
  extraClasses?: SVGAttributes<SVGElement>['className']
} & Omit<SVGProps<SVGSVGElement>, 'style' | 'className'>

export default function BagSharp({ extraStyles, extraClasses, ...rest }: BagSharpProps) {
  const defaultProps: BagSharpProps = {
    width: '20px',
    height: '20px',
    extraClasses: '',
  }

  const mergedProps: BagSharpProps = { ...defaultProps, ...rest }

  return (
    <>
      <svg
        className={`[&>*]:stroke-current fill-current  ${extraClasses}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        {...mergedProps}
      >
        <path d="M372,160V148A116.13,116.13,0,0,0,258.89,32c-1,0-1.92,0-2.89,0s-1.93,0-2.89,0A116.13,116.13,0,0,0,140,148v12H52a4,4,0,0,0-4,4V464a16,16,0,0,0,16,16H448a16,16,0,0,0,16-16V164a4,4,0,0,0-4-4Zm-40,0H180V149c0-41.84,33.41-76.56,75.25-77A76.08,76.08,0,0,1,332,148Z" />
      </svg>
    </>
  )
}
