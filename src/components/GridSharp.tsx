import { SVGProps, SVGAttributes } from 'react'

type GridSharpProps = {
  extraStyles?: SVGAttributes<SVGElement>['style']
  extraClasses?: SVGAttributes<SVGElement>['className']
} & Omit<SVGProps<SVGSVGElement>, 'style' | 'className'>

export default function GridSharp({ extraStyles, extraClasses, ...rest }: GridSharpProps) {
  const defaultProps: GridSharpProps = {
    width: '20px',
    height: '20px',
    extraClasses: '',
  }

  const mergedProps: GridSharpProps = { ...defaultProps, ...rest }

  return (
    <>
      <svg
        className={`[&>*]:stroke-current fill-current  ${extraClasses}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        {...mergedProps}
      >
        <path d="M240,240H32V32H240Z" />
        <path d="M480,240H272V32H480Z" />
        <path d="M240,480H32V272H240Z" />
        <path d="M480,480H272V272H480Z" />
      </svg>
    </>
  )
}
