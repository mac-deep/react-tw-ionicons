import { SVGProps, SVGAttributes } from 'react'

type TabletPortraitProps = {
  extraStyles?: SVGAttributes<SVGElement>['style']
  extraClasses?: SVGAttributes<SVGElement>['className']
} & Omit<SVGProps<SVGSVGElement>, 'style' | 'className'>

export default function TabletPortrait({ extraStyles, extraClasses, ...rest }: TabletPortraitProps) {
  const defaultProps: TabletPortraitProps = {
    width: '20px',
    height: '20px',
    extraClasses: '',
  }

  const mergedProps: TabletPortraitProps = { ...defaultProps, ...rest }

  return (
    <>
      <svg
        className={`[&>*]:stroke-current fill-current  ${extraClasses}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        {...mergedProps}
      >
        <path d="M384,512H128a64.07,64.07,0,0,1-64-64V64A64.07,64.07,0,0,1,128,0H384a64.07,64.07,0,0,1,64,64V448A64.07,64.07,0,0,1,384,512ZM128,32A32,32,0,0,0,96,64V448a32,32,0,0,0,32,32H384a32,32,0,0,0,32-32V64a32,32,0,0,0-32-32Z" />
        <path d="M384,0a64.07,64.07,0,0,1,64,64V448a64.07,64.07,0,0,1-64,64H128a64.07,64.07,0,0,1-64-64V64A64.07,64.07,0,0,1,128,0H384M128,480H384a32,32,0,0,0,32-32V64a32,32,0,0,0-32-32H128A32,32,0,0,0,96,64V448a32,32,0,0,0,32,32m0-16a16,16,0,0,1-16-16V64a16,16,0,0,1,16-16H384a16,16,0,0,1,16,16V448a16,16,0,0,1-16,16Z" />
      </svg>
    </>
  )
}
