import { SVGProps, SVGAttributes } from 'react'

type PlayForwardSharpProps = {
  extraStyles?: SVGAttributes<SVGElement>['style']
  extraClasses?: SVGAttributes<SVGElement>['className']
} & Omit<SVGProps<SVGSVGElement>, 'style' | 'className'>

export default function PlayForwardSharp({ extraStyles, extraClasses, ...rest }: PlayForwardSharpProps) {
  const defaultProps: PlayForwardSharpProps = {
    width: '20px',
    height: '20px',
    extraClasses: '',
  }

  const mergedProps: PlayForwardSharpProps = { ...defaultProps, ...rest }

  return (
    <>
      <svg
        className={`[&>*]:stroke-current fill-current  ${extraClasses}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        {...mergedProps}
      >
        <polygon points="16 400 256 256 16 112 16 400" />
        <polygon points="256 400 496 256 256 112 256 400" />
      </svg>
    </>
  )
}
