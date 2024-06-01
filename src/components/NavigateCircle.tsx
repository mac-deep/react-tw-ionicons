import { SVGProps, SVGAttributes } from 'react'

type NavigateCircleProps = {
  extraStyles?: SVGAttributes<SVGElement>['style']
  extraClasses?: SVGAttributes<SVGElement>['className']
} & Omit<SVGProps<SVGSVGElement>, 'style' | 'className'>

export default function NavigateCircle({ extraStyles, extraClasses, ...rest }: NavigateCircleProps) {
  const defaultProps: NavigateCircleProps = {
    width: '20px',
    height: '20px',
    extraClasses: '',
  }

  const mergedProps: NavigateCircleProps = { ...defaultProps, ...rest }

  return (
    <>
      <svg
        className={`[&>*]:stroke-current fill-current  ${extraClasses}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        {...mergedProps}
      >
        <path d="M258.9,48C141.92,46.42,46.42,141.92,48,258.9,49.56,371.09,140.91,462.44,253.1,464c117,1.6,212.48-93.9,210.88-210.88C462.44,140.91,371.09,49.56,258.9,48ZM351,175.24,268.76,361.76c-4.79,10.47-20.78,7-20.78-4.56V268a4,4,0,0,0-4-4H154.8c-11.52,0-15-15.87-4.57-20.67L336.76,161A10.73,10.73,0,0,1,351,175.24Z" />
      </svg>
    </>
  )
}
