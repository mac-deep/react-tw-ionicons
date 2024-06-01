import { SVGProps, SVGAttributes } from 'react'

type PrismSharpProps = {
  extraStyles?: SVGAttributes<SVGElement>['style']
  extraClasses?: SVGAttributes<SVGElement>['className']
} & Omit<SVGProps<SVGSVGElement>, 'style' | 'className'>

export default function PrismSharp({ extraStyles, extraClasses, ...rest }: PrismSharpProps) {
  const defaultProps: PrismSharpProps = {
    width: '20px',
    height: '20px',
    extraClasses: '',
  }

  const mergedProps: PrismSharpProps = { ...defaultProps, ...rest }

  return (
    <>
      <svg
        className={`[&>*]:stroke-current fill-current  ${extraClasses}`}
        id="icons"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        {...mergedProps}
      >
        <path d="M256,16,16,352,256,496,496,352Zm-20,96.82V437.35L73.73,340Z" />
      </svg>
    </>
  )
}
