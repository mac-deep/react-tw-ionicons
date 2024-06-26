import { SVGProps, SVGAttributes } from 'react'

type BodySharpProps = {
  extraStyles?: SVGAttributes<SVGElement>['style']
  extraClasses?: SVGAttributes<SVGElement>['className']
} & Omit<SVGProps<SVGSVGElement>, 'style' | 'className'>

export default function BodySharp({ extraStyles, extraClasses, ...rest }: BodySharpProps) {
  const defaultProps: BodySharpProps = {
    width: '20px',
    height: '20px',
    extraClasses: '',
  }

  const mergedProps: BodySharpProps = { ...defaultProps, ...rest }

  return (
    <>
      <svg
        className={`[&>*]:stroke-current fill-current  ${extraClasses}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        {...mergedProps}
      >
        <circle cx="256" cy="56" r="56" />
        <polygon points="464 128 48 128 48 180 192 180 160 505.13 211 512 232.65 320 279.67 320 301 512 352 505.02 320 180 464 180 464 128" />
      </svg>
    </>
  )
}
