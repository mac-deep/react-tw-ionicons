import { SVGProps, SVGAttributes } from 'react'

type DiamondProps = {
  extraStyles?: SVGAttributes<SVGElement>['style']
  extraClasses?: SVGAttributes<SVGElement>['className']
} & Omit<SVGProps<SVGSVGElement>, 'style' | 'className'>

export default function Diamond({ extraStyles, extraClasses, ...rest }: DiamondProps) {
  const defaultProps: DiamondProps = {
    width: '20px',
    height: '20px',
    extraClasses: '',
  }

  const mergedProps: DiamondProps = { ...defaultProps, ...rest }

  return (
    <>
      <svg
        className={`[&>*]:stroke-current fill-current  ${extraClasses}`}
        id="icons"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        {...mergedProps}
      >
        <path d="M121.72,32A4,4,0,0,0,118,37.56l2.3,5.43L161,137.89a4,4,0,0,0,6.88.82L243,38.4a4,4,0,0,0-3.2-6.4Z" />
        <path d="M419.93,58.06l-41.28,96.37a4,4,0,0,0,3.68,5.57h101a4,4,0,0,0,3.4-6.11L427,57.53A4,4,0,0,0,419.93,58.06Z" />
        <path d="M85,57.57,25.29,153.89a4,4,0,0,0,3.4,6.11h101a4,4,0,0,0,3.67-5.58L92,58.1A4,4,0,0,0,85,57.57Z" />
        <path d="M393.27,32H267.82a1.94,1.94,0,0,0-1.56,3.11l79.92,106.46a1.94,1.94,0,0,0,3.34-.4L391.6,43,395,34.66A1.92,1.92,0,0,0,393.3,32Z" />
        <path d="M239,448,149.57,194.51A3.78,3.78,0,0,0,146,192H25.7a3.72,3.72,0,0,0-2.95,6l216,279.81a5.06,5.06,0,0,0,6.39,1.37h0a5,5,0,0,0,2.39-6.08Z" />
        <path d="M486.3,192H366a3.75,3.75,0,0,0-3.54,2.51L264.26,472.67a5.21,5.21,0,0,0,2.42,6.31h0a5.22,5.22,0,0,0,6.61-1.39L489.25,198h0A3.72,3.72,0,0,0,486.3,192Z" />
        <path d="M259.2,78.93l56,74.67A4,4,0,0,1,312,160H200a4,4,0,0,1-3.2-6.4l56-74.67A4,4,0,0,1,259.2,78.93Zm-7,310.31L184.5,197.33a4,4,0,0,1,3.77-5.33H323.73a4,4,0,0,1,3.77,5.33L259.77,389.24A4,4,0,0,1,252.23,389.24Z" />
      </svg>
    </>
  )
}
