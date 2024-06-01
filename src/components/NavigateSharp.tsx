import { SVGProps, SVGAttributes } from 'react'

type NavigateSharpProps = {
  extraStyles?: SVGAttributes<SVGElement>['style']
  extraClasses?: SVGAttributes<SVGElement>['className']
} & Omit<SVGProps<SVGSVGElement>, 'style' | 'className'>

export default function NavigateSharp({ extraStyles, extraClasses, ...rest }: NavigateSharpProps) {
  const defaultProps: NavigateSharpProps = {
    width: '20px',
    height: '20px',
    extraClasses: '',
  }

  const mergedProps: NavigateSharpProps = { ...defaultProps, ...rest }

  return (
    <>
      <svg
        className={`[&>*]:stroke-current fill-current  ${extraClasses}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        {...mergedProps}
      >
        <polygon points="480 32 32 240 272 240 272 480 480 32" />
      </svg>
    </>
  )
}
