import { SVGProps, SVGAttributes } from 'react'

type CodeSlashProps = {
  extraStyles?: SVGAttributes<SVGElement>['style']
  extraClasses?: SVGAttributes<SVGElement>['className']
} & Omit<SVGProps<SVGSVGElement>, 'style' | 'className'>

export default function CodeSlash({ extraStyles, extraClasses, ...rest }: CodeSlashProps) {
  const defaultProps: CodeSlashProps = {
    width: '20px',
    height: '20px',
    extraClasses: '',
  }

  const mergedProps: CodeSlashProps = { ...defaultProps, ...rest }

  return (
    <>
      <svg
        className={`[&>*]:stroke-current fill-current  ${extraClasses}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        {...mergedProps}
      >
        <path d="M160,389a20.91,20.91,0,0,1-13.82-5.2l-128-112a21,21,0,0,1,0-31.6l128-112a21,21,0,0,1,27.66,31.61L63.89,256l109.94,96.19A21,21,0,0,1,160,389Z" />
        <path d="M352,389a21,21,0,0,1-13.84-36.81L448.11,256,338.17,159.81a21,21,0,0,1,27.66-31.61l128,112a21,21,0,0,1,0,31.6l-128,112A20.89,20.89,0,0,1,352,389Z" />
        <path d="M208,437a21,21,0,0,1-20.12-27l96-320A21,21,0,1,1,324.11,102l-96,320A21,21,0,0,1,208,437Z" />
      </svg>
    </>
  )
}