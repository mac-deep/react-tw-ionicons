import { SVGProps, SVGAttributes } from 'react'

type BasketballProps = {
  extraStyles?: SVGAttributes<SVGElement>['style']
  extraClasses?: SVGAttributes<SVGElement>['className']
} & Omit<SVGProps<SVGSVGElement>, 'style' | 'className'>

export default function Basketball({ extraStyles, extraClasses, ...rest }: BasketballProps) {
  const defaultProps: BasketballProps = {
    width: '20px',
    height: '20px',
    extraClasses: '',
  }

  const mergedProps: BasketballProps = { ...defaultProps, ...rest }

  return (
    <>
      <svg
        className={`[&>*]:stroke-current fill-current  ${extraClasses}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        {...mergedProps}
      >
        <path d="M256,233.37l34.45-34.45A207.08,207.08,0,0,1,240.33,63.67c0-5,.19-10.05.54-15A207.09,207.09,0,0,0,120.67,98Z" />
        <path d="M313.14,176.23,391.33,98A207.07,207.07,0,0,0,273,48.8c-.41,4.9-.64,9.86-.64,14.87A175.25,175.25,0,0,0,313.14,176.23Z" />
        <path d="M335.77,198.86a175.25,175.25,0,0,0,112.56,40.81c5,0,10-.23,14.87-.64A207.07,207.07,0,0,0,414,120.67Z" />
        <path d="M176.23,313.14A175.23,175.23,0,0,0,63.67,272.33q-7.52,0-14.87.64A207.07,207.07,0,0,0,98,391.33Z" />
        <path d="M256,278.63l-34.45,34.45a207.08,207.08,0,0,1,50.12,135.25c0,5-.19,10.05-.54,15A207.06,207.06,0,0,0,391.33,414Z" />
        <path d="M448.33,271.67a207.08,207.08,0,0,1-135.25-50.12L278.63,256,414,391.33a207.09,207.09,0,0,0,49.39-120.2C458.38,271.48,453.37,271.67,448.33,271.67Z" />
        <path d="M233.37,256,98,120.67a207.06,207.06,0,0,0-49.39,120.2c5-.35,10-.54,15-.54a207.08,207.08,0,0,1,135.25,50.12Z" />
        <path d="M120.67,414A207.07,207.07,0,0,0,239,463.2q.63-7.35.64-14.87a175.23,175.23,0,0,0-40.81-112.56Z" />
      </svg>
    </>
  )
}