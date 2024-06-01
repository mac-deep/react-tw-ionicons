import { SVGProps, SVGAttributes } from 'react'

type ColorWandSharpProps = {
  extraStyles?: SVGAttributes<SVGElement>['style']
  extraClasses?: SVGAttributes<SVGElement>['className']
} & Omit<SVGProps<SVGSVGElement>, 'style' | 'className'>

export default function ColorWandSharp({ extraStyles, extraClasses, ...rest }: ColorWandSharpProps) {
  const defaultProps: ColorWandSharpProps = {
    width: '20px',
    height: '20px',
    extraClasses: '',
  }

  const mergedProps: ColorWandSharpProps = { ...defaultProps, ...rest }

  return (
    <>
      <svg
        className={`[&>*]:stroke-current fill-current  ${extraClasses}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        {...mergedProps}
      >
        <rect x="158.6" y="150.86" width="95.03" height="110.51" transform="translate(-85.38 206.12) rotate(-45)" />
        <polygon points="301.41 234.21 234.22 301.41 412 480 480 412 301.41 234.21" />
        <rect x="32" y="176" width="80" height="32" />
        <rect x="91.22" y="67.22" width="32" height="80" transform="translate(-44.41 107.22) rotate(-45)" />
        <rect x="176" y="32" width="32" height="80" />
        <rect x="236.92" y="91.22" width="80" height="32" transform="translate(5.29 227.22) rotate(-45)" />
        <rect x="67.22" y="260.92" width="80" height="32" transform="translate(-164.41 156.92) rotate(-45)" />
      </svg>
    </>
  )
}
