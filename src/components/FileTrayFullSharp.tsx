import { SVGProps, SVGAttributes } from 'react'

type FileTrayFullSharpProps = {
  extraStyles?: SVGAttributes<SVGElement>['style']
  extraClasses?: SVGAttributes<SVGElement>['className']
} & Omit<SVGProps<SVGSVGElement>, 'style' | 'className'>

export default function FileTrayFullSharp({ extraStyles, extraClasses, ...rest }: FileTrayFullSharpProps) {
  const defaultProps: FileTrayFullSharpProps = {
    width: '20px',
    height: '20px',
    extraClasses: '',
  }

  const mergedProps: FileTrayFullSharpProps = { ...defaultProps, ...rest }

  return (
    <>
      <svg
        className={`[&>*]:stroke-current fill-current  ${extraClasses}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        {...mergedProps}
      >
        <rect x="128" y="128" width="256" height="38" />
        <rect x="112" y="192" width="288" height="38" />
        <path d="M448,64H64L32,256V448H480V256ZM436,256H320a64,64,0,0,1-128,0H76L98,106H414Z" />
      </svg>
    </>
  )
}
