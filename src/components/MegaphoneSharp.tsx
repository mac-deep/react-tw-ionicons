import { SVGProps, SVGAttributes } from 'react'

type MegaphoneSharpProps = {
  extraStyles?: SVGAttributes<SVGElement>['style']
  extraClasses?: SVGAttributes<SVGElement>['className']
} & Omit<SVGProps<SVGSVGElement>, 'style' | 'className'>

export default function MegaphoneSharp({ extraStyles, extraClasses, ...rest }: MegaphoneSharpProps) {
  const defaultProps: MegaphoneSharpProps = {
    width: '20px',
    height: '20px',
    extraClasses: '',
  }

  const mergedProps: MegaphoneSharpProps = { ...defaultProps, ...rest }

  return (
    <>
      <svg
        className={`[&>*]:stroke-current fill-current  ${extraClasses}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        {...mergedProps}
      >
        <path d="M128,144V476a4,4,0,0,0,4,4H232.07a8,8,0,0,0,7.82-9.7L208.71,352H232a8,8,0,0,0,8-8V144Z" />
        <path d="M452.18,186.55,448,185.5V36a4,4,0,0,0-4-4H401.5a4,4,0,0,0-2.63,1L272,144V304L398.87,415a4,4,0,0,0,2.63,1H444a4,4,0,0,0,4-4V262.5l4.18-1.05C461.8,258.84,480,247.67,480,224S461.8,189.16,452.18,186.55Z" />
        <path d="M96,144H52a4,4,0,0,0-4,4v35.59a43,43,0,0,0-4.24,4.35C38.4,194.32,32,205.74,32,224c0,20.19,7.89,33.13,16,40.42V300a4,4,0,0,0,4,4H96Z" />
      </svg>
    </>
  )
}
