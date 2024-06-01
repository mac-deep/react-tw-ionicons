import { SVGProps, SVGAttributes } from 'react'

type LogoCss3Props = {
  extraStyles?: SVGAttributes<SVGElement>['style']
  extraClasses?: SVGAttributes<SVGElement>['className']
} & Omit<SVGProps<SVGSVGElement>, 'style' | 'className'>

export default function LogoCss3({ extraStyles, extraClasses, ...rest }: LogoCss3Props) {
  const defaultProps: LogoCss3Props = {
    width: '20px',
    height: '20px',
    extraClasses: '',
  }

  const mergedProps: LogoCss3Props = { ...defaultProps, ...rest }

  return (
    <>
      <svg
        className={`[&>*]:stroke-current fill-current  ${extraClasses}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        {...mergedProps}
      >
        <path d="M64,32,99,435.22,255.77,480,413,435.15,448,32ZM354.68,366.9,256.07,395l-98.46-28.24L150.86,289h48.26l3.43,39.56,53.59,15.16.13.28h0l53.47-14.85L315.38,265H203l-4-50H319.65L324,164H140l-4-49H376.58Z" />
      </svg>
    </>
  )
}
