import { SVGProps, SVGAttributes } from 'react'

type MapOutlineProps = {
  extraStyles?: SVGAttributes<SVGElement>['style']
  extraClasses?: SVGAttributes<SVGElement>['className']
} & Omit<SVGProps<SVGSVGElement>, 'style' | 'className'>

export default function MapOutline({ extraStyles, extraClasses, ...rest }: MapOutlineProps) {
  const defaultProps: MapOutlineProps = {
    width: '20px',
    height: '20px',
    extraClasses: '',
  }

  const mergedProps: MapOutlineProps = { ...defaultProps, ...rest }

  return (
    <>
      <svg
        className={`[&>*]:stroke-current fill-current  ${extraClasses}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        {...mergedProps}
      >
        <path
          d="M313.27,124.64,198.73,51.36a32,32,0,0,0-29.28.35L56.51,127.49A16,16,0,0,0,48,141.63v295.8a16,16,0,0,0,23.49,14.14l97.82-63.79a32,32,0,0,1,29.5-.24l111.86,73a32,32,0,0,0,29.27-.11l115.43-75.94a16,16,0,0,0,8.63-14.2V74.57a16,16,0,0,0-23.49-14.14l-98,63.86A32,32,0,0,1,313.27,124.64Z"
          style={{
            fill: 'none',
            stroke: 'currentColor',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '32px',
          }}
        />
        <line
          x1="328"
          y1="128"
          x2="328"
          y2="464"
          style={{
            fill: 'none',
            stroke: 'currentColor',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '32px',
          }}
        />
        <line
          x1="184"
          y1="48"
          x2="184"
          y2="384"
          style={{
            fill: 'none',
            stroke: 'currentColor',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '32px',
          }}
        />
      </svg>
    </>
  )
}
