import { SVGProps, SVGAttributes } from 'react'

type MagnetSharpProps = {
  extraStyles?: SVGAttributes<SVGElement>['style']
  extraClasses?: SVGAttributes<SVGElement>['className']
} & Omit<SVGProps<SVGSVGElement>, 'style' | 'className'>

export default function MagnetSharp({ extraStyles, extraClasses, ...rest }: MagnetSharpProps) {
  const defaultProps: MagnetSharpProps = {
    width: '20px',
    height: '20px',
    extraClasses: '',
  }

  const mergedProps: MagnetSharpProps = { ...defaultProps, ...rest }

  return (
    <>
      <svg
        className={`[&>*]:stroke-current fill-current  ${extraClasses}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        {...mergedProps}
      >
        <line
          x1="191.98"
          y1="463.58"
          x2="191.98"
          y2="415.58"
          style={{ stroke: 'currentColor', strokeLinecap: 'square', strokeMiterlimit: '10', strokeWidth: '32px' }}
        />
        <line
          x1="90.16"
          y1="421.4"
          x2="124.1"
          y2="387.46"
          style={{ stroke: 'currentColor', strokeLinecap: 'square', strokeMiterlimit: '10', strokeWidth: '32px' }}
        />
        <line
          x1="47.98"
          y1="319.58"
          x2="95.98"
          y2="319.58"
          style={{ stroke: 'currentColor', strokeLinecap: 'square', strokeMiterlimit: '10', strokeWidth: '32px' }}
        />
        <path d="M422.2,89.82a144,144,0,0,0-203.71-.07l-67.88,67.88,67.88,67.89,67.88-67.89a48,48,0,0,1,68.46.59c18.3,18.92,17.48,49.24-1.14,67.86L286.37,293.4l67.88,67.88,66.91-66.91C477.53,238,478.53,146.22,422.2,89.82Z" />
        <rect x="107.29" y="188.83" width="64" height="96" transform="translate(-126.67 167.86) rotate(-45)" />
        <rect x="243.06" y="324.59" width="64" height="96" transform="translate(-182.9 303.62) rotate(-45)" />
      </svg>
    </>
  )
}
