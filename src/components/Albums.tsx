import { SVGProps, SVGAttributes } from 'react'

type AlbumsProps = {
  extraStyles?: SVGAttributes<SVGElement>['style']
  extraClasses?: SVGAttributes<SVGElement>['className']
} & Omit<SVGProps<SVGSVGElement>, 'style' | 'className'>

export default function Albums({ extraStyles, extraClasses, ...rest }: AlbumsProps) {
  const defaultProps: AlbumsProps = {
    width: '20px',
    height: '20px',
    extraClasses: '',
  }

  const mergedProps: AlbumsProps = { ...defaultProps, ...rest }

  return (
    <>
      <svg
        className={`[&>*]:stroke-current fill-current  ${extraClasses}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        {...mergedProps}
      >
        <path d="M368,96H144a16,16,0,0,1,0-32H368a16,16,0,0,1,0,32Z" />
        <path d="M400,144H112a16,16,0,0,1,0-32H400a16,16,0,0,1,0,32Z" />
        <path d="M419.13,448H92.87A44.92,44.92,0,0,1,48,403.13V204.87A44.92,44.92,0,0,1,92.87,160H419.13A44.92,44.92,0,0,1,464,204.87V403.13A44.92,44.92,0,0,1,419.13,448Z" />
      </svg>
    </>
  )
}
