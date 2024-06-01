import { SVGProps, SVGAttributes } from 'react'

type PlaySkipForwardCircleSharpProps = {
  extraStyles?: SVGAttributes<SVGElement>['style']
  extraClasses?: SVGAttributes<SVGElement>['className']
} & Omit<SVGProps<SVGSVGElement>, 'style' | 'className'>

export default function PlaySkipForwardCircleSharp({
  extraStyles,
  extraClasses,
  ...rest
}: PlaySkipForwardCircleSharpProps) {
  const defaultProps: PlaySkipForwardCircleSharpProps = {
    width: '20px',
    height: '20px',
    extraClasses: '',
  }

  const mergedProps: PlaySkipForwardCircleSharpProps = { ...defaultProps, ...rest }

  return (
    <>
      <svg
        className={`[&>*]:stroke-current fill-current  ${extraClasses}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        {...mergedProps}
      >
        <path d="M256,48C141.31,48,48,141.31,48,256s93.31,208,208,208,208-93.31,208-208S370.69,48,256,48Zm80,288H304V267L176,344.37V167.49L304,245V176h32Z" />
      </svg>
    </>
  )
}
