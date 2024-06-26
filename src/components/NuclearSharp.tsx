import { SVGProps, SVGAttributes } from 'react'

type NuclearSharpProps = {
  extraStyles?: SVGAttributes<SVGElement>['style']
  extraClasses?: SVGAttributes<SVGElement>['className']
} & Omit<SVGProps<SVGSVGElement>, 'style' | 'className'>

export default function NuclearSharp({ extraStyles, extraClasses, ...rest }: NuclearSharpProps) {
  const defaultProps: NuclearSharpProps = {
    width: '20px',
    height: '20px',
    extraClasses: '',
  }

  const mergedProps: NuclearSharpProps = { ...defaultProps, ...rest }

  return (
    <>
      <svg
        className={`[&>*]:stroke-current fill-current  ${extraClasses}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        {...mergedProps}
      >
        <circle cx="256" cy="256" r="48" />
        <path d="M223.47,335.59l-51.71,68a169.73,169.73,0,0,0,168.48,0l-51.71-68" style={{ fill: 'none' }} />
        <path d="M403.08,108.92A208,208,0,0,0,108.92,403.08,208,208,0,0,0,403.08,108.92ZM342,256a86.13,86.13,0,0,1-53.47,79.59l51.71,68a169.73,169.73,0,0,1-168.48,0l51.71-68a86,86,0,0,1-50.56-101.77l-85.48.09a170.21,170.21,0,0,1,73.83-119L199.2,191.5a85.78,85.78,0,0,1,113.6,0l37.94-76.59a170.21,170.21,0,0,1,73.83,119l-85.48-.09A85.87,85.87,0,0,1,342,256Z" />
      </svg>
    </>
  )
}
