import { SVGProps, SVGAttributes } from 'react'

type PlaySkipBackCircleSharpProps = {
  extraStyles?: SVGAttributes<SVGElement>['style']
  extraClasses?: SVGAttributes<SVGElement>['className']
} & Omit<SVGProps<SVGSVGElement>, 'style' | 'className'>

export default function PlaySkipBackCircleSharp({ extraStyles, extraClasses, ...rest }: PlaySkipBackCircleSharpProps) {
  const defaultProps: PlaySkipBackCircleSharpProps = {
    width: '20px',
    height: '20px',
    extraClasses: '',
  }

  const mergedProps: PlaySkipBackCircleSharpProps = { ...defaultProps, ...rest }

  return (
    <>
      <svg
        className={`[&>*]:stroke-current fill-current  ${extraClasses}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        {...mergedProps}
      >
        <path d="M48,256c0,114.69,93.31,208,208,208s208-93.31,208-208S370.69,48,256,48,48,141.31,48,256Zm128-80h32v69l128-77.53V344.37L208,267v69H176Z" />
      </svg>
    </>
  )
}
