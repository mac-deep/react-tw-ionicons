import { SVGProps, SVGAttributes } from 'react'

type AppsProps = {
  extraStyles?: SVGAttributes<SVGElement>['style']
  extraClasses?: SVGAttributes<SVGElement>['className']
} & Omit<SVGProps<SVGSVGElement>, 'style' | 'className'>

export default function Apps({ extraStyles, extraClasses, ...rest }: AppsProps) {
  const defaultProps: AppsProps = {
    width: '20px',
    height: '20px',
    extraClasses: '',
  }

  const mergedProps: AppsProps = { ...defaultProps, ...rest }

  return (
    <>
      <svg
        className={`[&>*]:stroke-current fill-current  ${extraClasses}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        {...mergedProps}
      >
        <path d="M104,160a56,56,0,1,1,56-56A56.06,56.06,0,0,1,104,160Z" />
        <path d="M256,160a56,56,0,1,1,56-56A56.06,56.06,0,0,1,256,160Z" />
        <path d="M408,160a56,56,0,1,1,56-56A56.06,56.06,0,0,1,408,160Z" />
        <path d="M104,312a56,56,0,1,1,56-56A56.06,56.06,0,0,1,104,312Z" />
        <path d="M256,312a56,56,0,1,1,56-56A56.06,56.06,0,0,1,256,312Z" />
        <path d="M408,312a56,56,0,1,1,56-56A56.06,56.06,0,0,1,408,312Z" />
        <path d="M104,464a56,56,0,1,1,56-56A56.06,56.06,0,0,1,104,464Z" />
        <path d="M256,464a56,56,0,1,1,56-56A56.06,56.06,0,0,1,256,464Z" />
        <path d="M408,464a56,56,0,1,1,56-56A56.06,56.06,0,0,1,408,464Z" />
      </svg>
    </>
  )
}
