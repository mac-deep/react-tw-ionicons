import { SVGProps, SVGAttributes } from 'react'

type PrintOutlineProps = {
  extraStyles?: SVGAttributes<SVGElement>['style']
  extraClasses?: SVGAttributes<SVGElement>['className']
} & Omit<SVGProps<SVGSVGElement>, 'style' | 'className'>

export default function PrintOutline({ extraStyles, extraClasses, ...rest }: PrintOutlineProps) {
  const defaultProps: PrintOutlineProps = {
    width: '20px',
    height: '20px',
    extraClasses: '',
  }

  const mergedProps: PrintOutlineProps = { ...defaultProps, ...rest }

  return (
    <>
      <svg
        className={`[&>*]:stroke-current fill-current  ${extraClasses}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        {...mergedProps}
      >
        <path
          d="M384,368h24a40.12,40.12,0,0,0,40-40V168a40.12,40.12,0,0,0-40-40H104a40.12,40.12,0,0,0-40,40V328a40.12,40.12,0,0,0,40,40h24"
          style={{ fill: 'none', stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: '32px' }}
        />
        <rect
          x="128"
          y="240"
          width="256"
          height="208"
          rx="24.32"
          ry="24.32"
          style={{ fill: 'none', stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: '32px' }}
        />
        <path
          d="M384,128V104a40.12,40.12,0,0,0-40-40H168a40.12,40.12,0,0,0-40,40v24"
          style={{ fill: 'none', stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: '32px' }}
        />
        <circle cx="392" cy="184" r="24" />
      </svg>
    </>
  )
}
