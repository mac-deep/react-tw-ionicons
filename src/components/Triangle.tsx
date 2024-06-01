import { SVGProps, SVGAttributes } from 'react'

type TriangleProps = {
  extraStyles?: SVGAttributes<SVGElement>['style']
  extraClasses?: SVGAttributes<SVGElement>['className']
} & Omit<SVGProps<SVGSVGElement>, 'style' | 'className'>

export default function Triangle({ extraStyles, extraClasses, ...rest }: TriangleProps) {
  const defaultProps: TriangleProps = {
    width: '20px',
    height: '20px',
    extraClasses: '',
  }

  const mergedProps: TriangleProps = { ...defaultProps, ...rest }

  return (
    <>
      <svg
        className={`[&>*]:stroke-current fill-current  ${extraClasses}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        {...mergedProps}
      >
        <path d="M464,464H48a16,16,0,0,1-14.07-23.62l208-384a16,16,0,0,1,28.14,0l208,384A16,16,0,0,1,464,464Z" />
      </svg>
    </>
  )
}
