import { SVGProps, SVGAttributes } from 'react'

type ShareSharpProps = {
  extraStyles?: SVGAttributes<SVGElement>['style']
  extraClasses?: SVGAttributes<SVGElement>['className']
} & Omit<SVGProps<SVGSVGElement>, 'style' | 'className'>

export default function ShareSharp({ extraStyles, extraClasses, ...rest }: ShareSharpProps) {
  const defaultProps: ShareSharpProps = {
    width: '20px',
    height: '20px',
    extraClasses: '',
  }

  const mergedProps: ShareSharpProps = { ...defaultProps, ...rest }

  return (
    <>
      <svg
        className={`[&>*]:stroke-current fill-current  ${extraClasses}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        {...mergedProps}
      >
        <path d="M272,176V337H240V176H92a12,12,0,0,0-12,12V468a12,12,0,0,0,12,12H420a12,12,0,0,0,12-12V188a12,12,0,0,0-12-12Z" />
        <polygon points="272 92.63 336 156.63 358.63 134 256 31.37 153.37 134 176 156.63 240 92.63 240 176 272 176 272 92.63" />
      </svg>
    </>
  )
}
