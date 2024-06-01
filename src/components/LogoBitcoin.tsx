import { SVGProps, SVGAttributes } from 'react'

type LogoBitcoinProps = {
  extraStyles?: SVGAttributes<SVGElement>['style']
  extraClasses?: SVGAttributes<SVGElement>['className']
} & Omit<SVGProps<SVGSVGElement>, 'style' | 'className'>

export default function LogoBitcoin({ extraStyles, extraClasses, ...rest }: LogoBitcoinProps) {
  const defaultProps: LogoBitcoinProps = {
    width: '20px',
    height: '20px',
    extraClasses: '',
  }

  const mergedProps: LogoBitcoinProps = { ...defaultProps, ...rest }

  return (
    <>
      <svg
        className={`[&>*]:stroke-current fill-current  ${extraClasses}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        {...mergedProps}
      >
        <path d="M410.47,279.2c-5-11.5-12.7-21.6-28.1-30.1a98.15,98.15,0,0,0-25.4-10,62.22,62.22,0,0,0,16.3-11,56.37,56.37,0,0,0,15.6-23.3,77.11,77.11,0,0,0,3.5-28.2c-1.1-16.8-4.4-33.1-13.2-44.8s-21.2-20.7-37.6-27c-12.6-4.8-25.5-7.8-45.5-8.9V32h-40V96h-32V32h-41V96H96v48h27.87c8.7,0,14.6.8,17.6,2.3a13.22,13.22,0,0,1,6.5,6c1.3,2.5,1.9,8.4,1.9,17.5V343c0,9-.6,14.8-1.9,17.4s-2,4.9-5.1,6.3-3.2,1.3-11.8,1.3h-26.4L96,416h87v64h41V416h32v64h40V415.6c26-1.3,44.5-4.7,59.4-10.3,19.3-7.2,34.1-17.7,44.7-31.5s14-34.9,14.93-51.2C415.7,308.1,415,289.4,410.47,279.2ZM224,150h32v74H224Zm0,212V272h32v90Zm72-208.1c6,2.5,9.9,7.5,13.8,12.7,4.3,5.7,6.5,13.3,6.5,21.4,0,7.8-2.9,14.5-7.5,20.5-3.8,4.9-6.8,8.3-12.8,11.1Zm28.8,186.7c-7.8,6.9-12.3,10.1-22.1,13.8a56.06,56.06,0,0,1-6.7,1.9V273.5a40.74,40.74,0,0,1,11.3,3.4c7.8,3.3,15.2,6.9,19.8,13.2a43.82,43.82,0,0,1,8,24.7C335.07,325.7,332.27,334,324.77,340.6Z" />
      </svg>
    </>
  )
}