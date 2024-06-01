import { SVGProps, SVGAttributes } from 'react'

type PlayBackSharpProps = {
  extraStyles?: SVGAttributes<SVGElement>['style']
  extraClasses?: SVGAttributes<SVGElement>['className']
} & Omit<SVGProps<SVGSVGElement>, 'style' | 'className'>

export default function PlayBackSharp({ extraStyles, extraClasses, ...rest }: PlayBackSharpProps) {
  const defaultProps: PlayBackSharpProps = {
    width: '20px',
    height: '20px',
    extraClasses: '',
  }

  const mergedProps: PlayBackSharpProps = { ...defaultProps, ...rest }

  return (
    <>
      <svg
        className={`[&>*]:stroke-current fill-current  ${extraClasses}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        {...mergedProps}
      >
        <polygon points="496 400 256 256 496 112 496 400" />
        <polygon points="256 400 16 256 256 112 256 400" />
      </svg>
    </>
  )
}
