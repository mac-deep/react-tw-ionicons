import { SVGProps, SVGAttributes } from 'react'

type PauseSharpProps = {
  extraStyles?: SVGAttributes<SVGElement>['style']
  extraClasses?: SVGAttributes<SVGElement>['className']
} & Omit<SVGProps<SVGSVGElement>, 'style' | 'className'>

export default function PauseSharp({ extraStyles, extraClasses, ...rest }: PauseSharpProps) {
  const defaultProps: PauseSharpProps = {
    width: '20px',
    height: '20px',
    extraClasses: '',
  }

  const mergedProps: PauseSharpProps = { ...defaultProps, ...rest }

  return (
    <>
      <svg
        className={`[&>*]:stroke-current fill-current  ${extraClasses}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        {...mergedProps}
      >
        <path d="M224,432H144V80h80Z" />
        <path d="M368,432H288V80h80Z" />
      </svg>
    </>
  )
}
