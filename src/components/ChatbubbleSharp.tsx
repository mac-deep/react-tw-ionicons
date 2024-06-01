import { SVGProps, SVGAttributes } from 'react'

type ChatbubbleSharpProps = {
  extraStyles?: SVGAttributes<SVGElement>['style']
  extraClasses?: SVGAttributes<SVGElement>['className']
} & Omit<SVGProps<SVGSVGElement>, 'style' | 'className'>

export default function ChatbubbleSharp({ extraStyles, extraClasses, ...rest }: ChatbubbleSharpProps) {
  const defaultProps: ChatbubbleSharpProps = {
    width: '20px',
    height: '20px',
    extraClasses: '',
  }

  const mergedProps: ChatbubbleSharpProps = { ...defaultProps, ...rest }

  return (
    <>
      <svg
        className={`[&>*]:stroke-current fill-current  ${extraClasses}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        {...mergedProps}
      >
        <path d="M475.22,206.52C464.88,157.87,437.46,113.59,398,81.84A227.4,227.4,0,0,0,255.82,32C194.9,32,138,55.47,95.46,98.09,54.35,139.33,31.82,193.78,32,251.37A215.66,215.66,0,0,0,67.65,370.13L72,376.18,48,480l114.8-28.56s2.3.77,4,1.42,16.33,6.26,31.85,10.6c12.9,3.6,39.74,9,60.77,9,59.65,0,115.35-23.1,156.83-65.06C457.36,365.77,480,310.42,480,251.49A213.5,213.5,0,0,0,475.22,206.52Z" />
      </svg>
    </>
  )
}