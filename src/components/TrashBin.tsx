import { SVGProps, SVGAttributes } from 'react'

type TrashBinProps = {
  extraStyles?: SVGAttributes<SVGElement>['style']
  extraClasses?: SVGAttributes<SVGElement>['className']
} & Omit<SVGProps<SVGSVGElement>, 'style' | 'className'>

export default function TrashBin({ extraStyles, extraClasses, ...rest }: TrashBinProps) {
  const defaultProps: TrashBinProps = {
    width: '20px',
    height: '20px',
    extraClasses: '',
  }

  const mergedProps: TrashBinProps = { ...defaultProps, ...rest }

  return (
    <>
      <svg
        className={`[&>*]:stroke-current fill-current  ${extraClasses}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        {...mergedProps}
      >
        <rect x="32" y="48" width="448" height="80" rx="32" ry="32" />
        <path d="M74.45,160a8,8,0,0,0-8,8.83L92.76,421.39a1.5,1.5,0,0,0,0,.22A48,48,0,0,0,140.45,464H371.54a48,48,0,0,0,47.67-42.39l0-.21,26.27-252.57a8,8,0,0,0-8-8.83ZM323.31,340.69a16,16,0,1,1-22.63,22.62L256,318.63l-44.69,44.68a16,16,0,0,1-22.63-22.62L233.37,296l-44.69-44.69a16,16,0,0,1,22.63-22.62L256,273.37l44.68-44.68a16,16,0,0,1,22.63,22.62L278.62,296Z" />
      </svg>
    </>
  )
}