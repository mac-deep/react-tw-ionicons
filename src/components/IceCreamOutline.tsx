import { SVGProps, SVGAttributes } from 'react'

type IceCreamOutlineProps = {
  extraStyles?: SVGAttributes<SVGElement>['style']
  extraClasses?: SVGAttributes<SVGElement>['className']
} & Omit<SVGProps<SVGSVGElement>, 'style' | 'className'>

export default function IceCreamOutline({ extraStyles, extraClasses, ...rest }: IceCreamOutlineProps) {
  const defaultProps: IceCreamOutlineProps = {
    width: '20px',
    height: '20px',
    extraClasses: '',
  }

  const mergedProps: IceCreamOutlineProps = { ...defaultProps, ...rest }

  return (
    <>
      <svg
        className={`[&>*]:stroke-current fill-current  ${extraClasses}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        {...mergedProps}
      >
        <polyline
          points="352 256 256 480 194 335"
          style={{
            fill: 'none',
            stroke: 'currentColor',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '32px',
          }}
        />
        <path
          d="M299.42,223.48C291.74,239.75,275.18,252,256,252c-13.1,0-27-5-33.63-9.76C216.27,237.87,208,240,208,250v62a24.07,24.07,0,0,1-24,24h0a24.07,24.07,0,0,1-24-24V256h-2c-35.35,0-62-28.65-62-64a64,64,0,0,1,64-64h8v-8a88,88,0,0,1,176,0v8h8a64,64,0,0,1,0,128c-21.78,0-42-13-52.59-32.51Z"
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
