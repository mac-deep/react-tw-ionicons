import { SVGProps, SVGAttributes } from 'react'

type CellularSharpProps = {
  extraStyles?: SVGAttributes<SVGElement>['style']
  extraClasses?: SVGAttributes<SVGElement>['className']
} & Omit<SVGProps<SVGSVGElement>, 'style' | 'className'>

export default function CellularSharp({ extraStyles, extraClasses, ...rest }: CellularSharpProps) {
  const defaultProps: CellularSharpProps = {
    width: '20px',
    height: '20px',
    extraClasses: '',
  }

  const mergedProps: CellularSharpProps = { ...defaultProps, ...rest }

  return (
    <>
      <svg
        className={`[&>*]:stroke-current fill-current  ${extraClasses}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        {...mergedProps}
      >
        <path d="M496,432H400V80h96Z" />
        <path d="M368,432H272V160h96Z" />
        <path d="M240,432H144V224h96Z" />
        <path d="M112,432H16V288h96Z" />
      </svg>
    </>
  )
}
