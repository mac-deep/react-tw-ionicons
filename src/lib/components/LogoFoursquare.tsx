import React, { SVGProps } from 'react'

type LogoFoursquareProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function LogoFoursquare({ extraStyles, ...rest }: LogoFoursquareProps) {
  const defaultProps: LogoFoursquareProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: LogoFoursquareProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <path d="M376.76,32H138.54C105.67,32,96,56.8,96,72.41V452.05c0,17.59,9.42,24.12,14.72,26.27s19.91,4,28.67-6.17c0,0,112.47-130.89,114.4-132.83,2.92-2.93,2.92-2.93,5.84-2.93H332.4c30.58,0,35.49-21.87,38.69-34.75,2.65-10.79,32.48-164,42.45-212.56C421.14,52,411.74,32,376.76,32Zm-5.67,269.64c2.65-10.79,32.48-164,42.45-212.56m-50.85,7.59-10,51.73c-1.19,5.65-8.28,11.6-14.86,11.6H241.91c-10.44,0-17.91,6.14-17.91,16.6v13.45c0,10.47,7.52,17.89,18,17.89h81.85c7.38,0,14.61,8.11,13,16s-9.09,46.57-10,50.89-5.84,11.72-14.61,11.72H248c-11.7,0-15.24,1.54-23.07,11.3s-78.26,94.59-78.26,94.59c-.71.82-1.41.58-1.41-.31V95.9c0-6.69,5.8-14.53,14.48-14.53H350.88A12.42,12.42,0,0,1,362.69,96.67Z" />
      </svg>
    </>
  )
}
