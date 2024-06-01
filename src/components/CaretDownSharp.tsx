import { SVGProps, SVGAttributes } from 'react'

type CaretDownSharpProps = {
  extraStyles?: SVGAttributes<SVGElement>['style']
  extraClasses?: SVGAttributes<SVGElement>['className']
} & Omit<SVGProps<SVGSVGElement>, 'style' | 'className'>

export default function CaretDownSharp({ extraStyles, extraClasses, ...rest }: CaretDownSharpProps) {
  const defaultProps: CaretDownSharpProps = {
    width: '20px',
    height: '20px',
    extraClasses: '',
  }

  const mergedProps: CaretDownSharpProps = { ...defaultProps, ...rest }

  return (
    <>
      <svg
        className={`[&>*]:stroke-current fill-current  ${extraClasses}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        {...mergedProps}
      >
        <polygon points="64 144 256 368 448 144 64 144" />
      </svg>
    </>
  )
}
