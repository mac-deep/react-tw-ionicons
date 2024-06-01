import { SVGProps, SVGAttributes } from 'react'

type FlashlightProps = {
  extraStyles?: SVGAttributes<SVGElement>['style']
  extraClasses?: SVGAttributes<SVGElement>['className']
} & Omit<SVGProps<SVGSVGElement>, 'style' | 'className'>

export default function Flashlight({ extraStyles, extraClasses, ...rest }: FlashlightProps) {
  const defaultProps: FlashlightProps = {
    width: '20px',
    height: '20px',
    extraClasses: '',
  }

  const mergedProps: FlashlightProps = { ...defaultProps, ...rest }

  return (
    <>
      <svg
        className={`[&>*]:stroke-current fill-current  ${extraClasses}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        {...mergedProps}
      >
        <path d="M462,216c9.35-9.35,15.14-19.09,17.19-28.95,2.7-12.95-1.29-25.55-11.22-35.48L360.43,44.05C346.29,29.92,322,24.07,296,50l-2,2a8,8,0,0,0,0,11.32L448.64,218A8,8,0,0,0,460,218Z" />
        <path d="M250.14,153.08l-.16,2.34c-.53,7.18-6.88,19.15-13.88,26.14L47.27,370.36c-11.12,11.11-16.46,25.57-15.05,40.7C33.49,424.58,40.16,438,51,448.83L63.17,461c12.61,12.6,27.78,19,42.49,19a50.4,50.4,0,0,0,36-15.24l188.84-188.8c7.07-7.07,18.84-13.3,26.17-13.87,17.48-1.32,43.57-3.28,67.79-15.65a4,4,0,0,0,1-6.37L271.69,86.31a4,4,0,0,0-6.39,1C253.18,110.3,251.48,134.22,250.14,153.08Zm-9.95,146.83a20,20,0,1,1,0-25.25A20,20,0,0,1,240.19,299.91Z" />
      </svg>
    </>
  )
}
