import { SVGProps, SVGAttributes } from 'react'

type LockClosedSharpProps = {
  extraStyles?: SVGAttributes<SVGElement>['style']
  extraClasses?: SVGAttributes<SVGElement>['className']
} & Omit<SVGProps<SVGSVGElement>, 'style' | 'className'>

export default function LockClosedSharp({ extraStyles, extraClasses, ...rest }: LockClosedSharpProps) {
  const defaultProps: LockClosedSharpProps = {
    width: '20px',
    height: '20px',
    extraClasses: '',
  }

  const mergedProps: LockClosedSharpProps = { ...defaultProps, ...rest }

  return (
    <>
      <svg
        className={`[&>*]:stroke-current fill-current  ${extraClasses}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        {...mergedProps}
      >
        <path d="M420,192H352V112a96,96,0,1,0-192,0v80H92a12,12,0,0,0-12,12V484a12,12,0,0,0,12,12H420a12,12,0,0,0,12-12V204A12,12,0,0,0,420,192Zm-106,0H198V111.25a58,58,0,1,1,116,0Z" />
      </svg>
    </>
  )
}
