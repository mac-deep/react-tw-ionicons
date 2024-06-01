import { SVGProps, SVGAttributes } from 'react'

type PodiumSharpProps = {
  extraStyles?: SVGAttributes<SVGElement>['style']
  extraClasses?: SVGAttributes<SVGElement>['className']
} & Omit<SVGProps<SVGSVGElement>, 'style' | 'className'>

export default function PodiumSharp({ extraStyles, extraClasses, ...rest }: PodiumSharpProps) {
  const defaultProps: PodiumSharpProps = {
    width: '20px',
    height: '20px',
    extraClasses: '',
  }

  const mergedProps: PodiumSharpProps = { ...defaultProps, ...rest }

  return (
    <>
      <svg
        className={`[&>*]:stroke-current fill-current  ${extraClasses}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        {...mergedProps}
      >
        <rect x="160" y="32" width="192" height="448" />
        <rect x="384" y="192" width="112" height="288" />
        <rect x="16" y="128" width="112" height="352" />
      </svg>
    </>
  )
}
