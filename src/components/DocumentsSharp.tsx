import { SVGProps, SVGAttributes } from 'react'

type DocumentsSharpProps = {
  extraStyles?: SVGAttributes<SVGElement>['style']
  extraClasses?: SVGAttributes<SVGElement>['className']
} & Omit<SVGProps<SVGSVGElement>, 'style' | 'className'>

export default function DocumentsSharp({ extraStyles, extraClasses, ...rest }: DocumentsSharpProps) {
  const defaultProps: DocumentsSharpProps = {
    width: '20px',
    height: '20px',
    extraClasses: '',
  }

  const mergedProps: DocumentsSharpProps = { ...defaultProps, ...rest }

  return (
    <>
      <svg
        className={`[&>*]:stroke-current fill-current  ${extraClasses}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        {...mergedProps}
      >
        <path d="M307.94,248,216,154.52V242a6,6,0,0,0,6,6Z" />
        <path d="M184,268V144H60a12,12,0,0,0-12,12V484a12,12,0,0,0,12,12H308a12,12,0,0,0,12-12V280H196A12,12,0,0,1,184,268Z" />
        <path d="M366,120h85.94L360,26.52V114A6,6,0,0,0,366,120Z" />
        <path d="M340,152a12,12,0,0,1-12-12V16H172a12,12,0,0,0-12,12v84h42.12A40.81,40.81,0,0,1,231,124.14l109.16,111a41.11,41.11,0,0,1,11.83,29V400H452a12,12,0,0,0,12-12V152Z" />
      </svg>
    </>
  )
}