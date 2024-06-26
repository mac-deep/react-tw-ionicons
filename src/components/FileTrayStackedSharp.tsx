import { SVGProps, SVGAttributes } from 'react'

type FileTrayStackedSharpProps = {
  extraStyles?: SVGAttributes<SVGElement>['style']
  extraClasses?: SVGAttributes<SVGElement>['className']
} & Omit<SVGProps<SVGSVGElement>, 'style' | 'className'>

export default function FileTrayStackedSharp({ extraStyles, extraClasses, ...rest }: FileTrayStackedSharpProps) {
  const defaultProps: FileTrayStackedSharpProps = {
    width: '20px',
    height: '20px',
    extraClasses: '',
  }

  const mergedProps: FileTrayStackedSharpProps = { ...defaultProps, ...rest }

  return (
    <>
      <svg
        className={`[&>*]:stroke-current fill-current  ${extraClasses}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        {...mergedProps}
      >
        <path d="M448,16H64L32,176V320H480V176ZM436,176H320a64,64,0,0,1-128,0H76L98,58H414Z" />
        <path d="M320,352a64,64,0,0,1-128,0H32V496H480V352Z" />
      </svg>
    </>
  )
}
