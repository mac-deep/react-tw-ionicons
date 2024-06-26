import { SVGProps, SVGAttributes } from 'react'

type PlayForwardCircleSharpProps = {
  extraStyles?: SVGAttributes<SVGElement>['style']
  extraClasses?: SVGAttributes<SVGElement>['className']
} & Omit<SVGProps<SVGSVGElement>, 'style' | 'className'>

export default function PlayForwardCircleSharp({ extraStyles, extraClasses, ...rest }: PlayForwardCircleSharpProps) {
  const defaultProps: PlayForwardCircleSharpProps = {
    width: '20px',
    height: '20px',
    extraClasses: '',
  }

  const mergedProps: PlayForwardCircleSharpProps = { ...defaultProps, ...rest }

  return (
    <>
      <svg
        className={`[&>*]:stroke-current fill-current  ${extraClasses}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        {...mergedProps}
      >
        <path d="M256,48C141.31,48,48,141.31,48,256s93.31,208,208,208,208-93.31,208-208S370.69,48,256,48Zm8,295.25V271.81L144,344.13V167.71l120,72.48V168l136.53,88Z" />
      </svg>
    </>
  )
}
