import { SVGProps, SVGAttributes } from 'react'

type WineSharpProps = {
  extraStyles?: SVGAttributes<SVGElement>['style']
  extraClasses?: SVGAttributes<SVGElement>['className']
} & Omit<SVGProps<SVGSVGElement>, 'style' | 'className'>

export default function WineSharp({ extraStyles, extraClasses, ...rest }: WineSharpProps) {
  const defaultProps: WineSharpProps = {
    width: '20px',
    height: '20px',
    extraClasses: '',
  }

  const mergedProps: WineSharpProps = { ...defaultProps, ...rest }

  return (
    <>
      <svg
        className={`[&>*]:stroke-current fill-current  ${extraClasses}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        {...mergedProps}
      >
        <path d="M453,112V66.33H60.75V112L235.88,288V406H124.75v42H389V406H277.88V288Zm-336.65-3.67h281l-37.81,38H154.16Z" />
      </svg>
    </>
  )
}
