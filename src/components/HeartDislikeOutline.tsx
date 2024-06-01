import { SVGProps, SVGAttributes } from 'react'

type HeartDislikeOutlineProps = {
  extraStyles?: SVGAttributes<SVGElement>['style']
  extraClasses?: SVGAttributes<SVGElement>['className']
} & Omit<SVGProps<SVGSVGElement>, 'style' | 'className'>

export default function HeartDislikeOutline({ extraStyles, extraClasses, ...rest }: HeartDislikeOutlineProps) {
  const defaultProps: HeartDislikeOutlineProps = {
    width: '20px',
    height: '20px',
    extraClasses: '',
  }

  const mergedProps: HeartDislikeOutlineProps = { ...defaultProps, ...rest }

  return (
    <>
      <svg
        className={`[&>*]:stroke-current fill-current  ${extraClasses}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        {...mergedProps}
      >
        <path d="M417.84,448a15.94,15.94,0,0,1-11.35-4.72L40.65,75.26A16,16,0,0,1,63.35,52.7l365.83,368A16,16,0,0,1,417.84,448Z" />
        <path d="M364.92,80c-48.09,0-80,29.55-96.92,51-16.88-21.48-48.83-51-96.92-51a107.37,107.37,0,0,0-31,4.55L168,112c22.26,0,45.81,9,63.94,26.67a123,123,0,0,1,21.75,28.47,16,16,0,0,0,28.6,0,123,123,0,0,1,21.77-28.51C322.19,121,342.66,112,364.92,112c43.15,0,78.62,36.33,79.07,81,.54,53.69-22.75,99.55-57.38,139.52l22.63,22.77c3-3.44,5.7-6.64,8.14-9.6,40-48.75,59.15-98.8,58.61-153C475.37,130.52,425.54,80,364.92,80Z" />
        <path d="M268,432C180.38,372.51,91,297.6,92,193a83.69,83.69,0,0,1,2.24-18.39L69,149.14a115.1,115.1,0,0,0-9,43.49c-.54,54.22,18.63,104.27,58.61,153,18.77,22.87,52.8,59.45,131.39,112.8a31.84,31.84,0,0,0,36,0c20.35-13.81,37.7-26.5,52.58-38.11l-22.66-22.81C300.25,409.6,284.09,421.05,268,432Z" />
      </svg>
    </>
  )
}
