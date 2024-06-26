import { SVGProps, SVGAttributes } from 'react'

type ClipboardOutlineProps = {
  extraStyles?: SVGAttributes<SVGElement>['style']
  extraClasses?: SVGAttributes<SVGElement>['className']
} & Omit<SVGProps<SVGSVGElement>, 'style' | 'className'>

export default function ClipboardOutline({ extraStyles, extraClasses, ...rest }: ClipboardOutlineProps) {
  const defaultProps: ClipboardOutlineProps = {
    width: '20px',
    height: '20px',
    extraClasses: '',
  }

  const mergedProps: ClipboardOutlineProps = { ...defaultProps, ...rest }

  return (
    <>
      <svg
        className={`[&>*]:stroke-current fill-current  ${extraClasses}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        {...mergedProps}
      >
        <path
          d="M336,64h32a48,48,0,0,1,48,48V432a48,48,0,0,1-48,48H144a48,48,0,0,1-48-48V112a48,48,0,0,1,48-48h32"
          style={{ fill: 'none', stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: '32px' }}
        />
        <rect
          x="176"
          y="32"
          width="160"
          height="64"
          rx="26.13"
          ry="26.13"
          style={{ fill: 'none', stroke: 'currentColor', strokeLinejoin: 'round', strokeWidth: '32px' }}
        />
      </svg>
    </>
  )
}
