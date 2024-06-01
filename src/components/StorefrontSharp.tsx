import { SVGProps, SVGAttributes } from 'react'

type StorefrontSharpProps = {
  extraStyles?: SVGAttributes<SVGElement>['style']
  extraClasses?: SVGAttributes<SVGElement>['className']
} & Omit<SVGProps<SVGSVGElement>, 'style' | 'className'>

export default function StorefrontSharp({ extraStyles, extraClasses, ...rest }: StorefrontSharpProps) {
  const defaultProps: StorefrontSharpProps = {
    width: '20px',
    height: '20px',
    extraClasses: '',
  }

  const mergedProps: StorefrontSharpProps = { ...defaultProps, ...rest }

  return (
    <>
      <svg
        className={`[&>*]:stroke-current fill-current  ${extraClasses}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        {...mergedProps}
      >
        <path d="M464,448V267.85a104.76,104.76,0,0,1-33.56,6.58c-1.18,0-2.3.05-3.4.05a108,108,0,0,1-56.86-16,108,108,0,0,1-56.85,16,106.16,106.16,0,0,1-56.51-16.2,107.84,107.84,0,0,1-57.2,16.2,106.14,106.14,0,0,1-56.85-16.42,106.14,106.14,0,0,1-56.85,16.42c-1.09,0-2.19,0-3.37-.05h-.06A104.66,104.66,0,0,1,48,267.49V448H16v32H496V448ZM224,384H128V308a4,4,0,0,1,4-4h88a4,4,0,0,1,4,4Zm160,64H304V308a4,4,0,0,1,4-4h72a4,4,0,0,1,4,4Z" />
        <path d="M492.57,170.28,445.89,64C432,32,432,32,400,32H112c-32,0-32,0-45.94,32L19.38,170.28c-9,19.41,2.89,39.34,2.9,39.35l.41.66c.42.66,1.13,1.75,1.62,2.37.1.13.19.27.28.4l5.24,6.39,5.31,5.14.42.36A69.65,69.65,0,0,0,45,231.73v.05a74,74,0,0,0,36,10.67c.82,0,1.64,0,2.47,0a76.08,76.08,0,0,0,51.89-20.31,72.38,72.38,0,0,0,5.77-6,74.18,74.18,0,0,0,5.78,6,76.08,76.08,0,0,0,51.89,20.31c23.28,0,44.07-10,57.63-25.56a.11.11,0,0,1,.15,0l5.66,5.26a76.09,76.09,0,0,0,51.9,20.31c23.29,0,44.11-10,57.66-25.61,13.56,15.61,34.37,25.61,57.67,25.61l2.49,0a71.35,71.35,0,0,0,35-10.7v0c.95-.57,1.86-1.17,2.78-1.77A71.33,71.33,0,0,0,488,212.17l2-3C490.9,207.13,501.21,188.87,492.57,170.28Z" />
      </svg>
    </>
  )
}
