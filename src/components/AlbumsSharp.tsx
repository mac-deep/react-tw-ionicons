import { SVGProps, SVGAttributes } from 'react'

type AlbumsSharpProps = {
  extraStyles?: SVGAttributes<SVGElement>['style']
  extraClasses?: SVGAttributes<SVGElement>['className']
} & Omit<SVGProps<SVGSVGElement>, 'style' | 'className'>

export default function AlbumsSharp({ extraStyles, extraClasses, ...rest }: AlbumsSharpProps) {
  const defaultProps: AlbumsSharpProps = {
    width: '20px',
    height: '20px',
    extraClasses: '',
  }

  const mergedProps: AlbumsSharpProps = { ...defaultProps, ...rest }

  return (
    <>
      <svg
        className={`[&>*]:stroke-current fill-current  ${extraClasses}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        {...mergedProps}
      >
        <rect x="128" y="64" width="256" height="32" />
        <rect x="96" y="112" width="320" height="32" />
        <path d="M464,448H48V160H464Z" />
      </svg>
    </>
  )
}
