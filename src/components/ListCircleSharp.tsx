import { SVGProps, SVGAttributes } from 'react'

type ListCircleSharpProps = {
  extraStyles?: SVGAttributes<SVGElement>['style']
  extraClasses?: SVGAttributes<SVGElement>['className']
} & Omit<SVGProps<SVGSVGElement>, 'style' | 'className'>

export default function ListCircleSharp({ extraStyles, extraClasses, ...rest }: ListCircleSharpProps) {
  const defaultProps: ListCircleSharpProps = {
    width: '20px',
    height: '20px',
    extraClasses: '',
  }

  const mergedProps: ListCircleSharpProps = { ...defaultProps, ...rest }

  return (
    <>
      <svg
        className={`[&>*]:stroke-current fill-current  ${extraClasses}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        {...mergedProps}
      >
        <path d="M256,48C141.31,48,48,141.31,48,256s93.31,208,208,208,208-93.31,208-208S370.69,48,256,48ZM192,335.5a16,16,0,0,1-16,16H160a16,16,0,0,1-16-16v-16a16,16,0,0,1,16-16h16a16,16,0,0,1,16,16Zm0-71a16,16,0,0,1-16,16H160a16,16,0,0,1-16-16v-16a16,16,0,0,1,16-16h16a16,16,0,0,1,16,16Zm0-72a16,16,0,0,1-16,16H160a16,16,0,0,1-16-16v-16a16,16,0,0,1,16-16h16a16,16,0,0,1,16,16Zm176,151H212.67v-32H368Zm0-71H212.67v-32H368Zm0-72H212.67v-32H368Z" />
      </svg>
    </>
  )
}
