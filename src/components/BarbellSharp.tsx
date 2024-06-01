import { SVGProps, SVGAttributes } from 'react'

type BarbellSharpProps = {
  extraStyles?: SVGAttributes<SVGElement>['style']
  extraClasses?: SVGAttributes<SVGElement>['className']
} & Omit<SVGProps<SVGSVGElement>, 'style' | 'className'>

export default function BarbellSharp({ extraStyles, extraClasses, ...rest }: BarbellSharpProps) {
  const defaultProps: BarbellSharpProps = {
    width: '20px',
    height: '20px',
    extraClasses: '',
  }

  const mergedProps: BarbellSharpProps = { ...defaultProps, ...rest }

  return (
    <>
      <svg
        className={`[&>*]:stroke-current fill-current  ${extraClasses}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        {...mergedProps}
      >
        <polygon points="496 176 438 176 438 112 362 112 362 234 150 234 150 112 74 112 74 176 16 176 16 336 74 336 74 400 150 400 150 278 362 278 362 400 438 400 438 336 496 336 496 176" />
      </svg>
    </>
  )
}
