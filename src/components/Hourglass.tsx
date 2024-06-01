import { SVGProps, SVGAttributes } from 'react'

type HourglassProps = {
  extraStyles?: SVGAttributes<SVGElement>['style']
  extraClasses?: SVGAttributes<SVGElement>['className']
} & Omit<SVGProps<SVGSVGElement>, 'style' | 'className'>

export default function Hourglass({ extraStyles, extraClasses, ...rest }: HourglassProps) {
  const defaultProps: HourglassProps = {
    width: '20px',
    height: '20px',
    extraClasses: '',
  }

  const mergedProps: HourglassProps = { ...defaultProps, ...rest }

  return (
    <>
      <svg
        className={`[&>*]:stroke-current fill-current  ${extraClasses}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        {...mergedProps}
      >
        <path d="M415.7,427.13c-8.74-76.89-43.83-108.76-69.46-132C328.52,279,320,270.61,320,256c0-14.41,8.49-22.64,26.16-38.44,25.93-23.17,61.44-54.91,69.56-132.84a47,47,0,0,0-12-36.26A50.3,50.3,0,0,0,366.39,32H145.61a50.34,50.34,0,0,0-37.39,16.46A47.05,47.05,0,0,0,96.28,84.72c8.09,77.68,43.47,109.19,69.3,132.19C183.42,232.8,192,241.09,192,256c0,15.1-8.6,23.56-26.5,39.75C140,318.85,105,350.48,96.3,427.13A46.59,46.59,0,0,0,108,463.33,50.44,50.44,0,0,0,145.61,480H366.39A50.44,50.44,0,0,0,404,463.33,46.59,46.59,0,0,0,415.7,427.13ZM343.3,432H169.13c-15.6,0-20-18-9.06-29.16C186.55,376,240,356.78,240,326V224c0-19.85-38-35-61.51-67.2-3.88-5.31-3.49-12.8,6.37-12.8H327.59c8.41,0,10.22,7.43,6.4,12.75C310.82,189,272,204.05,272,224V326c0,30.53,55.71,47,80.4,76.87C362.35,414.91,358.87,432,343.3,432Z" />
      </svg>
    </>
  )
}
