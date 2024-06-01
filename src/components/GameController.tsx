import { SVGProps, SVGAttributes } from 'react'

type GameControllerProps = {
  extraStyles?: SVGAttributes<SVGElement>['style']
  extraClasses?: SVGAttributes<SVGElement>['className']
} & Omit<SVGProps<SVGSVGElement>, 'style' | 'className'>

export default function GameController({ extraStyles, extraClasses, ...rest }: GameControllerProps) {
  const defaultProps: GameControllerProps = {
    width: '20px',
    height: '20px',
    extraClasses: '',
  }

  const mergedProps: GameControllerProps = { ...defaultProps, ...rest }

  return (
    <>
      <svg
        className={`[&>*]:stroke-current fill-current  ${extraClasses}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        {...mergedProps}
      >
        <path d="M483.13,245.38C461.92,149.49,430,98.31,382.65,84.33A107.13,107.13,0,0,0,352,80c-13.71,0-25.65,3.34-38.28,6.88C298.5,91.15,281.21,96,256,96s-42.51-4.84-57.76-9.11C185.6,83.34,173.67,80,160,80a115.74,115.74,0,0,0-31.73,4.32c-47.1,13.92-79,65.08-100.52,161C4.61,348.54,16,413.71,59.69,428.83a56.62,56.62,0,0,0,18.64,3.22c29.93,0,53.93-24.93,70.33-45.34,18.53-23.1,40.22-34.82,107.34-34.82,59.95,0,84.76,8.13,106.19,34.82,13.47,16.78,26.2,28.52,38.9,35.91,16.89,9.82,33.77,12,50.16,6.37,25.82-8.81,40.62-32.1,44-69.24C497.82,331.27,493.86,293.86,483.13,245.38ZM208,240H176v32a16,16,0,0,1-32,0V240H112a16,16,0,0,1,0-32h32V176a16,16,0,0,1,32,0v32h32a16,16,0,0,1,0,32Zm84,4a20,20,0,1,1,20-20A20,20,0,0,1,292,244Zm44,44a20,20,0,1,1,20-19.95A20,20,0,0,1,336,288Zm0-88a20,20,0,1,1,20-20A20,20,0,0,1,336,200Zm44,44a20,20,0,1,1,20-20A20,20,0,0,1,380,244Z" />
      </svg>
    </>
  )
}
