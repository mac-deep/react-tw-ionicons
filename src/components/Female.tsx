import { SVGProps, SVGAttributes } from 'react'

type FemaleProps = {
  extraStyles?: SVGAttributes<SVGElement>['style']
  extraClasses?: SVGAttributes<SVGElement>['className']
} & Omit<SVGProps<SVGSVGElement>, 'style' | 'className'>

export default function Female({ extraStyles, extraClasses, ...rest }: FemaleProps) {
  const defaultProps: FemaleProps = {
    width: '20px',
    height: '20px',
    extraClasses: '',
  }

  const mergedProps: FemaleProps = { ...defaultProps, ...rest }

  return (
    <>
      <svg
        className={`[&>*]:stroke-current fill-current  ${extraClasses}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        {...mergedProps}
      >
        <path d="M430,190c0-95.94-78.06-174-174-174S82,94.06,82,190c0,88.49,66.4,161.77,152,172.61V394H198a22,22,0,0,0,0,44h36v36a22,22,0,0,0,44,0V438h36a22,22,0,0,0,0-44H278V362.61C363.6,351.77,430,278.49,430,190Zm-304,0c0-71.68,58.32-130,130-130s130,58.32,130,130S327.68,320,256,320,126,261.68,126,190Z" />
      </svg>
    </>
  )
}
