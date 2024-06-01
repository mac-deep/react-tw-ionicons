import { SVGProps, SVGAttributes } from 'react'

type FlashSharpProps = {
  extraStyles?: SVGAttributes<SVGElement>['style']
  extraClasses?: SVGAttributes<SVGElement>['className']
} & Omit<SVGProps<SVGSVGElement>, 'style' | 'className'>

export default function FlashSharp({ extraStyles, extraClasses, ...rest }: FlashSharpProps) {
  const defaultProps: FlashSharpProps = {
    width: '20px',
    height: '20px',
    extraClasses: '',
  }

  const mergedProps: FlashSharpProps = { ...defaultProps, ...rest }

  return (
    <>
      <svg
        className={`[&>*]:stroke-current fill-current  ${extraClasses}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        {...mergedProps}
      >
        <path d="M432,208H288L320,16,80,304H224L192,496Z" />
      </svg>
    </>
  )
}
