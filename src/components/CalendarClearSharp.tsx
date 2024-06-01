import { SVGProps, SVGAttributes } from 'react'

type CalendarClearSharpProps = {
  extraStyles?: SVGAttributes<SVGElement>['style']
  extraClasses?: SVGAttributes<SVGElement>['className']
} & Omit<SVGProps<SVGSVGElement>, 'style' | 'className'>

export default function CalendarClearSharp({ extraStyles, extraClasses, ...rest }: CalendarClearSharpProps) {
  const defaultProps: CalendarClearSharpProps = {
    width: '20px',
    height: '20px',
    extraClasses: '',
  }

  const mergedProps: CalendarClearSharpProps = { ...defaultProps, ...rest }

  return (
    <>
      <svg
        className={`[&>*]:stroke-current fill-current  ${extraClasses}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        {...mergedProps}
      >
        <path d="M32,456a24,24,0,0,0,24,24H456a24,24,0,0,0,24-24V192H32Z" />
        <path d="M480,87.77A23.8,23.8,0,0,0,456,64H400.08V32h-48V64H159.92V32h-48V64H56A23.8,23.8,0,0,0,32,87.77V144H480Z" />
      </svg>
    </>
  )
}
