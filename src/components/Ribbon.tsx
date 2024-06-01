import { SVGProps, SVGAttributes } from 'react'

type RibbonProps = {
  extraStyles?: SVGAttributes<SVGElement>['style']
  extraClasses?: SVGAttributes<SVGElement>['className']
} & Omit<SVGProps<SVGSVGElement>, 'style' | 'className'>

export default function Ribbon({ extraStyles, extraClasses, ...rest }: RibbonProps) {
  const defaultProps: RibbonProps = {
    width: '20px',
    height: '20px',
    extraClasses: '',
  }

  const mergedProps: RibbonProps = { ...defaultProps, ...rest }

  return (
    <>
      <svg
        className={`[&>*]:stroke-current fill-current  ${extraClasses}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        {...mergedProps}
      >
        <path d="M269,335.61q-6.33.47-12.78.47c-5.23,0-10.4-.24-15.51-.69a176.11,176.11,0,0,1-127.67-72.94,4,4,0,0,0-6.77.35l-72,129.4c-2.74,5-3.17,11-.28,15.88A16.78,16.78,0,0,0,48.22,416h78a15.28,15.28,0,0,1,13.62,7.33L178.5,488a16.26,16.26,0,0,0,13.75,8h0c5.94-.33,12.09-4.19,14.56-9.6l66.11-145.15A4,4,0,0,0,269,335.61Z" />
        <path d="M477.64,391.88,406.11,262.71a4,4,0,0,0-6.74-.36,176.5,176.5,0,0,1-78.31,61.42,16.09,16.09,0,0,0-8.72,8.25l-36.86,81.1a7.92,7.92,0,0,0,0,6.6l30.27,66.59c2.45,5.41,8.59,9.36,14.52,9.69h0a16.3,16.3,0,0,0,13.7-8.12L372.5,423.3c2.89-4.85,8.13-7.33,13.78-7.3h78.77c6.67,0,11.72-3.48,14-10A16.92,16.92,0,0,0,477.64,391.88Z" />
        <ellipse cx="256.26" cy="160" rx="48.01" ry="48" />
        <path d="M256.26,16c-79.42,0-144,64.59-144,144s64.61,144,144,144,144-64.6,144-144S335.67,16,256.26,16Zm0,224a80,80,0,1,1,80-80A80.1,80.1,0,0,1,256.26,240Z" />
      </svg>
    </>
  )
}
