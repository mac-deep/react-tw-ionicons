import { SVGProps, SVGAttributes } from 'react'

type ArrowRedoCircleSharpProps = {
  extraStyles?: SVGAttributes<SVGElement>['style']
  extraClasses?: SVGAttributes<SVGElement>['className']
} & Omit<SVGProps<SVGSVGElement>, 'style' | 'className'>

export default function ArrowRedoCircleSharp({ extraStyles, extraClasses, ...rest }: ArrowRedoCircleSharpProps) {
  const defaultProps: ArrowRedoCircleSharpProps = {
    width: '20px',
    height: '20px',
    extraClasses: '',
  }

  const mergedProps: ArrowRedoCircleSharpProps = { ...defaultProps, ...rest }

  return (
    <>
      <svg
        className={`[&>*]:stroke-current fill-current  ${extraClasses}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        {...mergedProps}
      >
        <path d="M48,256c0,114.87,93.13,208,208,208s208-93.13,208-208S370.87,48,256,48,48,141.13,48,256Zm98,88c0-68.13,22.67-137.14,119.17-137.14V152L366,248,265.17,344V289.14C198.48,289.14,173.85,308.43,146,344Z" />
      </svg>
    </>
  )
}
