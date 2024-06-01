import { SVGProps, SVGAttributes } from 'react'

type KeypadProps = {
  extraStyles?: SVGAttributes<SVGElement>['style']
  extraClasses?: SVGAttributes<SVGElement>['className']
} & Omit<SVGProps<SVGSVGElement>, 'style' | 'className'>

export default function Keypad({ extraStyles, extraClasses, ...rest }: KeypadProps) {
  const defaultProps: KeypadProps = {
    width: '20px',
    height: '20px',
    extraClasses: '',
  }

  const mergedProps: KeypadProps = { ...defaultProps, ...rest }

  return (
    <>
      <svg
        className={`[&>*]:stroke-current fill-current  ${extraClasses}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        {...mergedProps}
      >
        <path d="M256,400a48,48,0,1,0,48,48,48,48,0,0,0-48-48Z" />
        <path d="M256,272a48,48,0,1,0,48,48,48,48,0,0,0-48-48Z" />
        <path d="M256,144a48,48,0,1,0,48,48,48,48,0,0,0-48-48Z" />
        <path d="M256,16a48,48,0,1,0,48,48,48,48,0,0,0-48-48Z" />
        <path d="M384,272a48,48,0,1,0,48,48,48,48,0,0,0-48-48Z" />
        <path d="M384,144a48,48,0,1,0,48,48,48,48,0,0,0-48-48Z" />
        <path d="M384,16a48,48,0,1,0,48,48,48,48,0,0,0-48-48Z" />
        <path d="M128,272a48,48,0,1,0,48,48,48,48,0,0,0-48-48Z" />
        <path d="M128,144a48,48,0,1,0,48,48,48,48,0,0,0-48-48Z" />
        <path d="M128,16a48,48,0,1,0,48,48,48,48,0,0,0-48-48Z" />
      </svg>
    </>
  )
}
