import { SVGProps, SVGAttributes } from 'react'

type BeakerSharpProps = {
  extraStyles?: SVGAttributes<SVGElement>['style']
  extraClasses?: SVGAttributes<SVGElement>['className']
} & Omit<SVGProps<SVGSVGElement>, 'style' | 'className'>

export default function BeakerSharp({ extraStyles, extraClasses, ...rest }: BeakerSharpProps) {
  const defaultProps: BeakerSharpProps = {
    width: '20px',
    height: '20px',
    extraClasses: '',
  }

  const mergedProps: BeakerSharpProps = { ...defaultProps, ...rest }

  return (
    <>
      <svg
        className={`[&>*]:stroke-current fill-current  ${extraClasses}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        {...mergedProps}
      >
        <path d="M453.55,54.7,464,32l-335.6,0c-27.74,0-49,6.57-63.31,19.51C54.39,61.27,48,74.89,48,88v24H64c31,0,32,16.79,32,35V460a20,20,0,0,0,20,20H428a20,20,0,0,0,20-20V96C448,78.84,450.28,61.86,453.55,54.7ZM416,96v64H128V138c0-36.15-21-51-41.77-53.46C89,70,105.7,64.05,128.4,64.05H418.32A221.83,221.83,0,0,0,416,96Z" />
      </svg>
    </>
  )
}