import { SVGProps, SVGAttributes } from 'react'

type SendSharpProps = {
  extraStyles?: SVGAttributes<SVGElement>['style']
  extraClasses?: SVGAttributes<SVGElement>['className']
} & Omit<SVGProps<SVGSVGElement>, 'style' | 'className'>

export default function SendSharp({ extraStyles, extraClasses, ...rest }: SendSharpProps) {
  const defaultProps: SendSharpProps = {
    width: '20px',
    height: '20px',
    extraClasses: '',
  }

  const mergedProps: SendSharpProps = { ...defaultProps, ...rest }

  return (
    <>
      <svg
        className={`[&>*]:stroke-current fill-current  ${extraClasses}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        {...mergedProps}
      >
        <path d="M16,464,496,256,16,48V208l320,48L16,304Z" />
      </svg>
    </>
  )
}
