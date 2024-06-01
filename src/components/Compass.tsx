import { SVGProps, SVGAttributes } from 'react'

type CompassProps = {
  extraStyles?: SVGAttributes<SVGElement>['style']
  extraClasses?: SVGAttributes<SVGElement>['className']
} & Omit<SVGProps<SVGSVGElement>, 'style' | 'className'>

export default function Compass({ extraStyles, extraClasses, ...rest }: CompassProps) {
  const defaultProps: CompassProps = {
    width: '20px',
    height: '20px',
    extraClasses: '',
  }

  const mergedProps: CompassProps = { ...defaultProps, ...rest }

  return (
    <>
      <svg
        className={`[&>*]:stroke-current fill-current  ${extraClasses}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        {...mergedProps}
      >
        <circle cx="256" cy="256" r="24" />
        <path d="M256,48C141.31,48,48,141.31,48,256s93.31,208,208,208,208-93.31,208-208S370.69,48,256,48ZM361.07,161.33l-46.88,117.2a64,64,0,0,1-35.66,35.66l-117.2,46.88a8,8,0,0,1-10.4-10.4l46.88-117.2a64,64,0,0,1,35.66-35.66l117.2-46.88A8,8,0,0,1,361.07,161.33Z" />
      </svg>
    </>
  )
}
