import { SVGProps, SVGAttributes } from 'react'

type InvertModeProps = {
  extraStyles?: SVGAttributes<SVGElement>['style']
  extraClasses?: SVGAttributes<SVGElement>['className']
} & Omit<SVGProps<SVGSVGElement>, 'style' | 'className'>

export default function InvertMode({ extraStyles, extraClasses, ...rest }: InvertModeProps) {
  const defaultProps: InvertModeProps = {
    width: '20px',
    height: '20px',
    extraClasses: '',
  }

  const mergedProps: InvertModeProps = { ...defaultProps, ...rest }

  return (
    <>
      <svg
        className={`[&>*]:stroke-current fill-current  ${extraClasses}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        {...mergedProps}
      >
        <circle fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32" cx="256" cy="256" r="208" />
        <path d="M256,176V336a80,80,0,0,0,0-160Z" />
        <path d="M256,48V176a80,80,0,0,0,0,160V464C141.12,464,48,370.88,48,256S141.12,48,256,48Z" />
      </svg>
    </>
  )
}
