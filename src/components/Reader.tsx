import { SVGProps, SVGAttributes } from 'react'

type ReaderProps = {
  extraStyles?: SVGAttributes<SVGElement>['style']
  extraClasses?: SVGAttributes<SVGElement>['className']
} & Omit<SVGProps<SVGSVGElement>, 'style' | 'className'>

export default function Reader({ extraStyles, extraClasses, ...rest }: ReaderProps) {
  const defaultProps: ReaderProps = {
    width: '20px',
    height: '20px',
    extraClasses: '',
  }

  const mergedProps: ReaderProps = { ...defaultProps, ...rest }

  return (
    <>
      <svg
        className={`[&>*]:stroke-current fill-current  ${extraClasses}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        {...mergedProps}
      >
        <path d="M368,32H144A64.07,64.07,0,0,0,80,96V416a64.07,64.07,0,0,0,64,64H368a64.07,64.07,0,0,0,64-64V96A64.07,64.07,0,0,0,368,32ZM256,304H176a16,16,0,0,1,0-32h80a16,16,0,0,1,0,32Zm80-80H176a16,16,0,0,1,0-32H336a16,16,0,0,1,0,32Zm0-80H176a16,16,0,0,1,0-32H336a16,16,0,0,1,0,32Z" />
      </svg>
    </>
  )
}
