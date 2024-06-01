import { SVGProps, SVGAttributes } from 'react'

type MedkitSharpProps = {
  extraStyles?: SVGAttributes<SVGElement>['style']
  extraClasses?: SVGAttributes<SVGElement>['className']
} & Omit<SVGProps<SVGSVGElement>, 'style' | 'className'>

export default function MedkitSharp({ extraStyles, extraClasses, ...rest }: MedkitSharpProps) {
  const defaultProps: MedkitSharpProps = {
    width: '20px',
    height: '20px',
    extraClasses: '',
  }

  const mergedProps: MedkitSharpProps = { ...defaultProps, ...rest }

  return (
    <>
      <svg
        className={`[&>*]:stroke-current fill-current  ${extraClasses}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        {...mergedProps}
      >
        <rect x="168" y="72" width="176" height="24" style={{ fill: 'none' }} />
        <path d="M484,96H384V40a8,8,0,0,0-8-8H136a8,8,0,0,0-8,8V96H28a12,12,0,0,0-12,12V468a12,12,0,0,0,12,12H484a12,12,0,0,0,12-12V108A12,12,0,0,0,484,96ZM168,72H344V96H168ZM352,310H278v74H234V310H160V266h74V192h44v74h74Z" />
      </svg>
    </>
  )
}
